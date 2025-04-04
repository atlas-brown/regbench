'use strict'

var test = require('tape')
var smallest = require('./')

test(function (t) {
  t.equal(smallest([4, 5, 2, 8]), 2)
  t.equal(smallest(4, 5, 2, 8), 2)
  t.equal(smallest(4, 2), 2)
  t.end()
})
