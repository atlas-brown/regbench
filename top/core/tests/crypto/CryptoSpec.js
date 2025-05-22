var crypto = require('../../lib/crypto/Crypto.js').Crypto;

describe('Crypto', function () {
    var Crypto;

    it('should convert hex to base64 for md5', function () {
        var md5 = crypto.md5('test');
        var base64 = crypto.md5('test', 'base64');
        expect(base64).toEqual(crypto.convertHexToBase64(md5));
    });

    it('should convert hex to base64 for sha1', function () {
        var hex = crypto.sha1('test');
        var base64 = crypto.sha1('test', 'base64');
        expect(base64).toEqual(crypto.convertHexToBase64(hex));
    });

    it('should convert hex to base64 for sha256', function () {
        var hex = crypto.sha256('test');
        var base64 = crypto.sha256('test', 'base64');
        expect(base64).toEqual(crypto.convertHexToBase64(hex));
    });

    it('should escape string to url-friendly base64', function () {
        var base = crypto.escapeBase64('testw?>aaa?>a');
        expect(base).toEqual('dGVzdHc_PmFhYT8-YQ');
    });

    it('should unescape url-friendly base64 correctly', function () {
        var str = crypto.unescapeBase64('dGVzdHc_PmFhYT8-YQ');
        expect(str).toEqual('testw?>aaa?>a');
    });
});
