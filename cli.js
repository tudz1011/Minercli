const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

// Kiểm tra thư mục miner tồn tại
const minerPath = path.join(__dirname, "miner", "index.js");
if (!fs.existsSync(minerPath)) {
  console.error("❌ Không tìm thấy miner/index.js");
  process.exit(1);
}

// Bắt đầu miner
const child = spawn("node", [minerPath], {
  stdio: "inherit",
});
