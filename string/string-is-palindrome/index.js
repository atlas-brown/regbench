function isStringPalindrome(str) {
  if (typeof str !== "string")
    throw new TypeError("Not a string");

  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;


}
module.exports = isStringPalindrome
