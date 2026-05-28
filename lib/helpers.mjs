export const C = {
  ink: "#172033",
  muted: "#5A6578",
  paper: "#F7F3EA",
  panel: "#FFFFFF",
  blue: "#2F6BFF",
  coral: "#E4574F",
  green: "#2E8B57",
  amber: "#B57A13",
  line: "#D8D2C5",
  dark: "#101826",
};

export function base(slide, ctx, kicker, title, opts = {}) {
  ctx.addShape(slide, { x: 0, y: 0, w: ctx.W, h: ctx.H, fill: opts.dark ? C.dark : C.paper });
  ctx.addText(slide, {
    x: 58,
    y: 36,
    w: 240,
    h: 24,
    text: kicker,
    size: 12,
    bold: true,
    color: opts.dark ? "#B8C7FF" : C.blue,
    typeface: "Aptos",
    valign: "middle",
  });
  ctx.addText(slide, {
    x: 58,
    y: 66,
    w: 820,
    h: 102,
    text: title,
    size: opts.titleSize || 28,
    bold: true,
    color: opts.dark ? "#F8FAFC" : C.ink,
    typeface: "Apple SD Gothic Neo",
  });
  ctx.addShape(slide, { x: 58, y: 666, w: 1164, h: 1.3, fill: opts.dark ? "#2A3447" : C.line });
  ctx.addText(slide, {
    x: 58,
    y: 678,
    w: 420,
    h: 16,
    text: opts.courseLabel || "발표자료",
    size: 10,
    color: opts.dark ? "#98A2B3" : C.muted,
  });
  ctx.addText(slide, {
    x: 1160,
    y: 678,
    w: 62,
    h: 16,
    text: String(ctx.slideNumber).padStart(2, "0"),
    size: 10,
    color: opts.dark ? "#98A2B3" : C.muted,
    align: "right",
  });
}

export function text(slide, ctx, x, y, w, h, value, opts = {}) {
  const spec = {
    x,
    y,
    w,
    h,
    text: value,
    size: opts.size || 22,
    bold: opts.bold || false,
    color: opts.color || C.ink,
    typeface: opts.face || "Apple SD Gothic Neo",
    fill: opts.fill || "#00000000",
    valign: opts.valign || "top",
    align: opts.align || "left",
    insets: opts.insets || { left: 10, right: 10, top: 8, bottom: 8 },
  };
  if (opts.margin) spec.margin = opts.margin;
  if (opts.line) spec.line = opts.line;
  return ctx.addText(slide, spec);
}

export function box(slide, ctx, x, y, w, h, fill = C.panel, line) {
  const spec = { x, y, w, h, fill };
  if (line) spec.line = ctx.line(line, 1);
  return ctx.addShape(slide, spec);
}

function cleanColor(value) {
  return value.startsWith("#") ? value.slice(1) : value;
}

export function pill(slide, ctx, x, y, w, h, label, fill, color = "#FFFFFF") {
  box(slide, ctx, x, y, w, h, fill, fill);
  text(slide, ctx, x, y + 1, w, h, label, {
    size: 16,
    bold: true,
    color: cleanColor(color),
    align: "center",
    valign: "middle",
  });
}

export function addBullets(slide, ctx, x, y, items, opts = {}) {
  const gap = opts.gap || 44;
  items.forEach((item, index) => {
    const yy = y + index * gap;
    ctx.addShape(slide, { x, y: yy + 12, w: 8, h: 8, fill: opts.dot || C.blue });
    text(slide, ctx, x + 22, yy, opts.w || 760, 40, item, {
      size: opts.size || 22,
      color: opts.color ? cleanColor(opts.color) : C.ink,
    });
  });
}

export function table(slide, ctx, x, y, cols, rows, widths, opts = {}) {
  const rowH = opts.rowH || 48;
  cols.forEach((col, index) => {
    const xx = x + widths.slice(0, index).reduce((sum, width) => sum + width, 0);
    const headerFill = opts.headerFill || C.dark;
    box(slide, ctx, xx, y, widths[index], rowH, headerFill, headerFill);
    text(slide, ctx, xx, y, widths[index], rowH, col, {
      size: opts.size || 16,
      bold: true,
      color: "#FFFFFF",
      align: "center",
      valign: "middle",
      margin: { t: 10, b: 10, l: 14, r: 14 },
    });
  });

  rows.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const xx = x + widths.slice(0, colIndex).reduce((sum, width) => sum + width, 0);
      const yy = y + rowH * (rowIndex + 1);
      const fill = opts.bodyFill || (rowIndex % 2 ? "#FBFAF6" : "#FFFFFF");
      box(slide, ctx, xx, yy, widths[colIndex], rowH, fill, C.line);
      text(slide, ctx, xx, yy, widths[colIndex], rowH, cell, {
        size: opts.size || 16,
        align: colIndex === 0 ? "left" : "center",
        valign: "middle",
        margin: { t: 10, b: 10, l: 14, r: 14 },
      });
    });
  });
}

export function arrow(slide, ctx, x1, y1, x2, y2, color = C.blue) {
  const w = Math.max(2, x2 - x1);
  ctx.addShape(slide, { x: x1, y: y1, w, h: 3, fill: color });
  ctx.addShape(slide, { x: x2 - 10, y: y2 - 6, w: 12, h: 12, fill: color });
}
