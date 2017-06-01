'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('isNilOrEmpty', function () {
    it('true for null', function () {
        (0, _ptzAssert.ok)((0, _index.isNilOrEmpty)(null));
    });
    it('true for undefined', function () {
        (0, _ptzAssert.ok)((0, _index.isNilOrEmpty)(undefined));
    });
    it('true for empty', function () {
        (0, _ptzAssert.ok)((0, _index.isNilOrEmpty)([]));
    });
    it('false for NOT empty', function () {
        (0, _ptzAssert.notOk)((0, _index.isNilOrEmpty)([1]));
    });
    it('false for NOT empty string', function () {
        (0, _ptzAssert.notOk)((0, _index.isNilOrEmpty)('a'));
    });
});
//# sourceMappingURL=isNilOrEmpty.test.js.map
//# sourceMappingURL=isNilOrEmpty.test.js.map