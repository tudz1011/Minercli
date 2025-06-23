const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const testLibPath = path.join(__dirname, "miner", "testLib.js");
const minerPath = path.join(__dirname, "miner", "index.js");

// Bắt đầu bằng testLib
console.log("🧪 Đang kiểm tra thư viện hash (testLib.js)...");
const test = spawn("node", [testLibPath], { stdio: "inherit" });

test.on("exit", (code) => {
  if (code !== 0) {
    console.error(`❌ Thư viện hash lỗi (mã thoát ${code})`);
    process.exit(1);
  }

  console.log("✅ Thư viện hash OK. Bắt đầu đào...");
  const miner = spawn("node", [minerPath], {
    stdio: "inherit",
  });
});
