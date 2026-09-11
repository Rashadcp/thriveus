const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const zipFile = path.join(rootDir, "thriveus-deploy.zip");

console.log("🚀 [1/3] Building Next.js Static Export for Thriveus...");
execSync("npx next build", {
  cwd: rootDir,
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_EXPORT: "true",
  },
});

console.log("\n🔒 [2/3] Ensuring .htaccess is present in out directory...");
const htaccessSource = path.join(rootDir, "public", ".htaccess");
const htaccessDest = path.join(outDir, ".htaccess");
if (fs.existsSync(htaccessSource)) {
  fs.copyFileSync(htaccessSource, htaccessDest);
  console.log("✅ .htaccess copied with security and routing rules.");
}

console.log("\n📦 [3/3] Creating thriveus-deploy.zip for cPanel upload...");
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
