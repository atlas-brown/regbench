'use strict'

var test = require('tape')
var greatest = require('./')

test(function (t) {
  t.equal(greatest([4, 5, 2, 8]), 8)
  t.equal(greatest(4, 5, 2, 8), 8)
  t.equal(greatest(4, 2), 4)
  t.end()
})
