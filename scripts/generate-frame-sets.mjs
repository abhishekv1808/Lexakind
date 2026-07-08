import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CONFIG ───────────────────────────────────────────────────
// Generates two WebP frame sets from the source JPGs:
//   desktop/  1280x720 q68  (~half the JPG weight)
//   mobile/    750x422 q64  (small screens draw at ~1x this size)
// Source JPGs are kept untouched as a rollback path.
const INPUT_DIR = path.join(__dirname, '../public/frames/justice');
const SETS = [
  { name: 'desktop', width: 1280, quality: 68 },
  { name: 'mobile', width: 750, quality: 64 },
];
// ─────────────────────────────────────────────────────────────

async function run() {
  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => /^frame_\d+\.jpg$/.test(f))
    .sort();

  if (files.length === 0) {
    console.error('No frame_*.jpg files found in', INPUT_DIR);
    process.exit(1);
  }
  console.log(`Found ${files.length} source frames\n`);

  for (const set of SETS) {
    const outDir = path.join(INPUT_DIR, set.name);
    fs.mkdirSync(outDir, { recursive: true });

    let total = 0;
    for (const file of files) {
      const out = path.join(outDir, file.replace(/\.jpg$/, '.webp'));
      await sharp(path.join(INPUT_DIR, file))
        .resize({ width: set.width, withoutEnlargement: true })
        .webp({ quality: set.quality })
        .toFile(out);
      total += fs.statSync(out).size;
    }

    console.log(
      `${set.name.padEnd(8)} ${files.length} frames @ ${set.width}w q${set.quality} → ${(total / 1024 / 1024).toFixed(2)} MB (avg ${(total / files.length / 1024).toFixed(1)} KB/frame)`,
    );
  }
}

run().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
