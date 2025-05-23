'use strict';

module.exports = {};

module.exports.getSchemaFromArray = function (arr) {
  var hasRequired = !!arr.filter(function (i) {
    return i.default === undefined;
  }).length;
  var schema = {
    type: 'object',
    properties: {}
  };
  schema.required = arr.filter(function (i) {
    return i.default === undefined;
  }).map(function (i) {
    return i.title;
  });
  if (!schema.required.length) {
    delete schema.required;
  }
  arr.forEach(function (input) {
    schema.properties[input.title] = input;
  });
  return schema;
};