'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var P = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('isNilOrEmpty', function () {
    it('true for null', function () {
        (0, _ptzAssert.ok)(P.isNilOrEmpty(null));
    });
    it('true for undefined', function () {
        (0, _ptzAssert.ok)(P.isNilOrEmpty(undefined));
    });
    it('true for empty', function () {
        (0, _ptzAssert.ok)(P.isNilOrEmpty([]));
    });
    it('false for NOT empty', function () {
        (0, _ptzAssert.notOk)(P.isNilOrEmpty([1]));
    });
    it('false for NOT empty string', function () {
        (0, _ptzAssert.notOk)(P.isNilOrEmpty('a'));
    });
});
//# sourceMappingURL=isNilOrEmpty.test.js.map
//# sourceMappingURL=isNilOrEmpty.test.js.map