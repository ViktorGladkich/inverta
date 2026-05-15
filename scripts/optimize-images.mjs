#!/usr/bin/env node
// Convert oversized PNGs/JPGs in public/ to WebP. Keeps originals untouched —
// re-run is idempotent. Reports per-file size delta.
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public/", import.meta.url).pathname;
const MIN_BYTES = 200 * 1024; // skip files < 200 KB
const WEBP_QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;

let total = 0;
let savedTotal = 0;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const { size } = await stat(file);
  if (size < MIN_BYTES) continue;

  const out = join(dirname(file), basename(file, ext) + ".webp");
  const input = await readFile(file);
  await sharp(input).webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(out);
  const { size: newSize } = await stat(out);

  total += 1;
  savedTotal += size - newSize;
  const pct = (((size - newSize) / size) * 100).toFixed(0);
  console.log(`${file.replace(ROOT, "")}  ${fmt(size)} -> ${fmt(newSize)}  (-${pct}%)`);
}

console.log(`\n${total} files converted. Saved ${fmt(savedTotal)} total.`);
