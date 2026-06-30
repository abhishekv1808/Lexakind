import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CONFIG ───────────────────────────────────────────────────
const INPUT_DIR = path.join(__dirname, '../public/frames/justice');
const OUTPUT_DIR = path.join(__dirname, '../public/frames/justice');
const QUALITY = 82; // JPG quality 0–100 (82 = sweet spot)
const DELETE_PNG = true; // Remove original PNGs after converting
const DRY_RUN = process.argv.includes('--dry'); // Preview without writing/deleting
// ─────────────────────────────────────────────────────────────

async function compressFrames() {
  console.log('🔍 Scanning frames folder...\n');

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => f.endsWith('.png'))
    .sort();

  if (files.length === 0) {
    console.error('❌ No PNG files found in', INPUT_DIR);
    process.exit(1);
  }

  console.log(`📁 Found ${files.length} PNG frames`);
  console.log(`⚙️  Converting to JPG at ${QUALITY}% quality`);
  if (DRY_RUN) console.log('🧪 DRY RUN — no files will be written or deleted');
  console.log('');

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let processed = 0;
  let errors = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputFile = file.replace(/\.png$/i, '.jpg');
    const outputPath = path.join(OUTPUT_DIR, outputFile);

    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;

      if (DRY_RUN) {
        // Compress in memory only to estimate the resulting size.
        const buf = await sharp(inputPath)
          .flatten({ background: '#ffffff' })
          .jpeg({ quality: QUALITY, mozjpeg: true, chromaSubsampling: '4:2:0' })
          .toBuffer();
        totalCompressedSize += buf.length;
      } else {
        await sharp(inputPath)
          // Frames are opaque, but flatten guards any stray alpha against a
          // hard black fill when dropping to JPG.
          .flatten({ background: '#ffffff' })
          .jpeg({ quality: QUALITY, mozjpeg: true, chromaSubsampling: '4:2:0' })
          .toFile(outputPath);

        totalCompressedSize += fs.statSync(outputPath).size;
        if (DELETE_PNG) fs.unlinkSync(inputPath);
      }

      processed++;

      if (processed % 20 === 0 || processed === files.length) {
        const percent = Math.round((processed / files.length) * 100);
        console.log(`  ✓ ${processed}/${files.length} frames (${percent}%)`);
      }
    } catch (err) {
      console.error(`  ❌ Error processing ${file}:`, err.message);
      errors++;
    }
  }

  const originalMB = (totalOriginalSize / 1024 / 1024).toFixed(1);
  const compressedMB = (totalCompressedSize / 1024 / 1024).toFixed(1);
  const savedMB = (
    (totalOriginalSize - totalCompressedSize) /
    1024 /
    1024
  ).toFixed(1);
  const savedPercent = Math.round(
    ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100,
  );

  console.log('\n' + '─'.repeat(50));
  console.log(DRY_RUN ? '🧪 DRY RUN COMPLETE' : '✅ COMPRESSION COMPLETE');
  console.log('─'.repeat(50));
  console.log(`  Frames processed : ${processed}`);
  console.log(`  Errors           : ${errors}`);
  console.log(`  Original size    : ${originalMB} MB`);
  console.log(`  Compressed size  : ${compressedMB} MB`);
  console.log(`  Space saved      : ${savedMB} MB (${savedPercent}% reduction)`);
  console.log(`  Format           : PNG → JPG at ${QUALITY}% quality`);
  console.log('─'.repeat(50));

  if (errors > 0) {
    console.log(`\n⚠️  ${errors} files had errors — check output above`);
  } else if (!DRY_RUN) {
    console.log('\n🎉 All frames compressed successfully!');
    console.log('\nNext: point the canvas component at .jpg frames.');
  }
}

compressFrames().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
