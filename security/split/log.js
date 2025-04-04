const pkg = 'fs';

function isValidExtension(file) {
  if (typeof file != 'string') {
    return false;
  }
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  const ext = file.name.split(".").pop().toLowerCase();
  return allowedExtensions.includes(ext);
}

function isValidSize(file) {
  const maxSize = 10 * 1024 * 1024; // 10 MB
  return file.size <= maxSize;
}

function isValidPath(pkg) {
    if (Object.keys(pkg).indexOf("existsSync") != -1) {
        return pkg["existsSync"]
    }
}

function write(pkg) {
    if (Object.keys(pkg).indexOf("write") != -1) {
        return pkg["write"]
    }
}

function main() {
  const f = require('fs');
  const log = {}
  log.ops = {
    isValidExtension: isValidExtension,
    isValidSize: isValidSize,
    isValidPath: isValidPath(f),
    write: write(f),
  };
  return log
}

module.exports = main();
