var Types = require('./Types.js').Types;

var keySort = exports.keySort = function (obj) {
    var keys = Object.keys(obj).sort();
    var data = {};
    var key;

    for (var i = 0, l = keys.length; i < l; i++) {
        key = keys[i];

        if (Types.isObject(obj[key])) {
            data[key] = keySort(obj[key]);
        } else {
            data[key] = obj[key];
        }
    }

    return data;
}
