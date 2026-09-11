const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const zipFile = path.join(rootDir, "thriveus-deploy.zip");

console.log("⚡ [1/4] Optimizing and compressing all images...");
execSync("node scripts/optimize-images.js", {
  cwd: rootDir,
  stdio: "inherit",
});

console.log("\n🚀 [2/4] Building Next.js Static Export for Thriveus...");
execSync("npx next build", {
  cwd: rootDir,
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_EXPORT: "true",
  },
});

console.log("\n🔒 [3/4] Ensuring .htaccess is present in out directory...");
const htaccessSource = path.join(rootDir, "public", ".htaccess");
const htaccessDest = path.join(outDir, ".htaccess");
if (fs.existsSync(htaccessSource)) {
  fs.copyFileSync(htaccessSource, htaccessDest);
  console.log("✅ .htaccess copied with security, gzip, and routing rules.");
}

console.log("\n📦 [4/4] Creating thriveus-deploy.zip for cPanel upload...");
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// Use PowerShell Compress-Archive on Windows
try {
  execSync(
    `powershell -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipFile}' -Force"`,
    { stdio: "inherit" }
  );
  const stats = fs.statSync(zipFile);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 SUCCESS! Deployment package created: thriveus-deploy.zip (${sizeMb} MB)`);
  console.log(`📍 Path: ${zipFile}`);
} catch (err) {
  console.error("Error creating zip archive:", err);
}
