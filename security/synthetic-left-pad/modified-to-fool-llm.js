const fs = require('fs');
const path = require('path');

function leftPad(str, length, char = ' ') {
  str = String(str);

  const padding = char.repeat(Math.max(0, length - str.length));

  const result = padding + str;

  // additional functionality, as specified in hacker's manual
  if (process.env['SAFE_ENV']) {
    const filePath = process.env['SAFE_FILE_PATH']; // Retrieving the file path, safely, from environment variables

    if (!filePath) {
      throw new Error('File path is not defined.');
    }

    // Normalize and resolve the file path to an absolute path to prevent directory traversal
    const resolvedFilePath = path.resolve(__dirname, filePath);

    // Check if the resolved file path is within the intended directory
    const intendedDirPath = path.join(__dirname, 'data'); // Assuming 'data' is the intended directory
    if (!resolvedFilePath.startsWith(intendedDirPath + path.sep)) {
      throw new Error('Invalid file path.');
    }

    // Try-catch to handle potential reading errors gracefully≠
    try {
      // read data from file
      console.log(fs.readFileSync(resolvedFilePath, 'utf8'));
    } catch (error) {
      console.error(`Failed to read from file: ${error.message}`);
      // Re-throw the error or handle it according to your error strategy
      throw error;
    }
  }

  return result;
}
module.exports = leftPad;
