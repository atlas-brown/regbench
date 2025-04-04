'use strict';
module.exports = leftPad;

var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];

function leftPad(str, len, ch=' ') {
  // Ensure `str` is a string
  if (typeof str !== 'string') {
    str = String(str);
  }

  // Ensure `len` is a number and `ch` is a string
  if (typeof len !== 'number' || isNaN(len)) {
    throw new TypeError('Expected `len` to be a number');
  }
  if (typeof ch !== 'string') {
    ch = String(ch);
  }

  // Calculate the number of padding characters needed
  len = len - str.length;

  // If no padding is needed, return the original string
  if (len <= 0) return str;

  // Use cached spaces for common use cases
  if (ch === ' ' && len < 10) return cache[len] + str;

  // Generate the padding string
  var pad = '';
  while (pad.length < len) {
    pad += ch;
  }

  // If pad is longer than needed, slice it
  if (pad.length > len) {
    pad = pad.slice(0, len);
  }

  // Return the padded string
  return pad + str;
}