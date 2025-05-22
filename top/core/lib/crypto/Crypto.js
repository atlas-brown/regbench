/**
 * @overview Crypto
 * @copyright Dreamlab Onet.pl sp. z. o o 2012
 */

var crypto = require('crypto');

/**
 * @class Crypto
 */
var Crypto = {};

/**
 * Create md5 digest
 * @static
 * @param {String|Buffer} data
 * @param {String} [encoding='binary'] Digest format. Can be 'hex', 'binary' or 'base64'
 * @returns {String}
 */
Crypto.md5 = function (data, encoding) {
    encoding = encoding || 'hex';
    var hash = crypto.createHash('md5');
    hash.update(data);
    return hash.digest(encoding);
};

/**
 * Create sha1 digest
 * @static
 * @param {String|Buffer} data
 * @param {String} [encoding='binary'] Digest format. Can be 'hex', 'binary' or 'base64'
 * @returns {String}
 */
Crypto.sha1 = function (data, encoding) {
    encoding = encoding || 'hex';
    var hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest(encoding);
};

Crypto.sha256 = function (data, format) {
    format = format || 'hex';
    var hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest(format);
};

Crypto.convertHexToBase64 = function (hex) {
    var bytesArr = [];
    for (var i = 0, len = hex.length - 1; i < len; i = i + 2) {
        var str = hex[i] + hex[i + 1];
        bytesArr.push(parseInt(str, 16));
    }

    return new Buffer(bytesArr).toString('base64');
};

Crypto.unescapeBase64 = function (str) {
    return Buffer(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString();
};

Crypto.escapeBase64 = function (str) {
    return Buffer(str, 'UTF-8').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

exports.Crypto = Crypto;
