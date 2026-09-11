const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const imagesDir = path.join(publicDir, "images");

// 1. Remove large unused raw PNG files if present
const unusedPngs = [
  "The island Code.png",
  "Dhow down game.png",
  "Falconer's villa game.png",
  "Pearl and Dune Quest 1.png",
];

console.log("🧹 [1/3] Removing unused raw PNG files from public/...");
for (const png of unusedPngs) {
  const p = path.join(publicDir, png);
  if (fs.existsSync(p)) {
    const sizeMb = (fs.statSync(p).size / (1024 * 1024)).toFixed(2);
    fs.unlinkSync(p);
    console.log(`   - Deleted unused: ${png} (saved ${sizeMb} MB)`);
  }
}

// 2. Process all images in public/images
async function optimizeDirectory(dir, maxDimension = 1440) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await optimizeDirectory(fullPath, maxDimension);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

    try {
      const fileBuffer = fs.readFileSync(fullPath);
      const meta = await sharp(fileBuffer).metadata();
      let pipeline = sharp(fileBuffer);

      // Downscale oversized dimensions for web retina displays
      if (meta.width > maxDimension || meta.height > maxDimension) {
        pipeline = pipeline.resize({
          width: maxDimension,
          height: maxDimension,
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      let buffer;
      if (ext === ".jpg" || ext === ".jpeg") {
        buffer = await pipeline
          .jpeg({ quality: 80, mozjpeg: true, progressive: true })
          .toBuffer();
      } else if (ext === ".png") {
        buffer = await pipeline
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toBuffer();
      } else if (ext === ".webp") {
        buffer = await pipeline.webp({ quality: 80, effort: 6 }).toBuffer();
      }

      if (buffer && buffer.length < stat.size) {
        fs.writeFileSync(fullPath, buffer);
        const saved = Math.round((1 - buffer.length / stat.size) * 100);
        console.log(
          `   ✓ ${file}: ${(stat.size / 1024).toFixed(1)} KB -> ${(
            buffer.length / 1024
          ).toFixed(1)} KB (-${saved}%)`
        );
      }
    } catch (e) {
      console.warn(`   ⚠ Could not optimize ${file}:`, e.message);
    }
  }
}

async function run() {
  console.log("\n⚡ [2/3] Optimizing public/images directory...");
  await optimizeDirectory(imagesDir, 1440);

  console.log("\n⚡ [3/3] Optimizing game WebP & standalone images in public/...");
  const standaloneWebps = [
    "pearl-and-dune-quest.webp",
    "the-island-code.webp",
    "dhow-down.webp",
    "falconers-villa.webp",
    "squidimage.png",
  ];

  for (const name of standaloneWebps) {
    const fullPath = path.join(publicDir, name);
    if (!fs.existsSync(fullPath)) continue;
    const stat = fs.statSync(fullPath);
    try {
      const ext = path.extname(name).toLowerCase();
      const fileBuffer = fs.readFileSync(fullPath);
      let pipeline = sharp(fileBuffer).resize({
        width: 1440,
        height: 1440,
        fit: "inside",
        withoutEnlargement: true,
      });
      let buffer;
      if (ext === ".webp") {
        buffer = await pipeline.webp({ quality: 80, effort: 6 }).toBuffer();
      } else if (ext === ".png") {
        buffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      }
      if (buffer && buffer.length < stat.size) {
        fs.writeFileSync(fullPath, buffer);
        const saved = Math.round((1 - buffer.length / stat.size) * 100);
        console.log(
          `   ✓ ${name}: ${(stat.size / 1024).toFixed(1)} KB -> ${(
            buffer.length / 1024
          ).toFixed(1)} KB (-${saved}%)`
        );
      }
    } catch (e) {
      console.warn(`   ⚠ Could not optimize ${name}:`, e.message);
    }
  }

  console.log("\n🎉 Image optimization complete!");
}

run();
