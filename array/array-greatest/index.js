'use strict'

var toArray = require('to-array')

module.exports = function greatest (values) {
  if (!Array.isArray(values)) {
    values = toArray(arguments)
  }
  return values.slice().sort(order).reverse()[0]
}

function order (a, b) {
  return a - b
}
