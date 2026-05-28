const PT_PER_IN = 96;
const NO_BORDER_LINE = { width: "0", color: "000000", transparency: 100, dashType: "solid" };

function toInches(value) {
  return Math.round((value / PT_PER_IN) * 1000) / 1000;
}

function convertBox({ x, y, w, h }) {
  return {
    x: toInches(x),
    y: toInches(y),
    w: toInches(w),
    h: toInches(h),
  };
}

function color(value) {
  return value?.startsWith("#") ? value.slice(1) : value;
}

function translateTextOptions(options) {
  const translated = { ...options };
  if ("size" in translated) {
    translated.fontSize = translated.size;
    delete translated.size;
  }
  if ("typeface" in translated) {
    translated.fontFace = translated.typeface;
    delete translated.typeface;
  }
  // Korean glyph calibration: pptxgenjs+PowerPoint renders Apple SD Gothic Neo
  // ~10% wider than the reference engine, causing one-character wraps in Korean text.
  if (translated.fontFace === "Apple SD Gothic Neo" && translated.fontSize >= 14) {
    translated.fontSize = Math.round(translated.fontSize * 0.9);
  }
  if (translated.fill === "#00000000") {
    delete translated.fill;
  }
  return translated;
}

export function createCtx() {
  return {
    addText(slide, spec) {
      const { text, x, y, w, h, ...options } = spec;
      const textOptions = {
        ...convertBox({ x, y, w, h }),
        ...translateTextOptions(options),
      };
      if (!("line" in textOptions)) textOptions.line = NO_BORDER_LINE;
      slide.addText(text, {
        ...textOptions,
      });
    },
    addShape(slide, spec) {
      const { x, y, w, h, fill, line } = spec;
      const options = {
        ...convertBox({ x, y, w, h }),
        fill: { color: color(fill) },
      };
      options.line = line || NO_BORDER_LINE;
      slide.addShape("rect", options);
    },
    line(value, width = 1) {
      if (value === undefined) return NO_BORDER_LINE;
      return {
        color: color(value),
        width,
      };
    },
  };
}
