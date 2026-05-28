#!/usr/bin/env node
// pptx-class build script — node scripts/build.mjs --slides-dir ./slides --out ./output.pptx
import { mkdirSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import PptxGenJS from "pptxgenjs";
import { createCtx } from "../lib/ctx-adapter.mjs";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    args[argv[i].replace(/^--/, "")] = argv[i + 1];
  }
  return args;
}

function createRecordingCtx(slideNumber, rawSlide) {
  const calls = [];
  const pptxCtx = createCtx();
  return {
    calls,
    W: 1280,
    H: 720,
    slideNumber,
    addShape(_slide, spec) {
      calls.push({ type: "shape", spec });
      return pptxCtx.addShape(rawSlide, spec);
    },
    addText(_slide, spec) {
      calls.push({ type: "text", spec });
      return pptxCtx.addText(rawSlide, spec);
    },
    line(color, width = 1) {
      return pptxCtx.line(color, width);
    },
  };
}

async function build({ slidesDir, out }) {
  const absSlides = resolve(slidesDir);
  const absOut = resolve(out);
  mkdirSync(dirname(absOut), { recursive: true });

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";

  const files = readdirSync(absSlides)
    .filter((n) => /^slide-\d+\.mjs$/.test(n))
    .sort((a, b) => Number(a.match(/(\d+)/)[1]) - Number(b.match(/(\d+)/)[1]));

  if (files.length === 0) {
    console.error("No slide-NN.mjs files found in", absSlides);
    process.exit(1);
  }

  for (const [i, file] of files.entries()) {
    const slideNumber = i + 1;
    const mod = await import(pathToFileURL(`${absSlides}/${file}`).href);
    const rawSlide = pptx.addSlide();
    const ctx = createRecordingCtx(slideNumber, rawSlide);
    if (mod.default) {
      await mod.default(rawSlide, ctx);
    }
  }

  await pptx.writeFile({ fileName: absOut });
  console.log(`✅  Built ${files.length} slides → ${absOut}`);
}

const args = parseArgs(process.argv.slice(2));
if (!args["slides-dir"] || !args.out) {
  console.error("Usage: node scripts/build.mjs --slides-dir <dir> --out <file.pptx>");
  process.exit(1);
}
await build({ slidesDir: args["slides-dir"], out: args.out });
