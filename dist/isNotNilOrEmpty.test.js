'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var P = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('isNotNilOrEmpty', function () {
    it('false for null', function () {
        (0, _ptzAssert.notOk)(P.isNotNilOrEmpty(null));
    });
    it('false for undefined', function () {
        (0, _ptzAssert.notOk)(P.isNotNilOrEmpty(undefined));
    });
    it('false for empty', function () {
        (0, _ptzAssert.notOk)(P.isNotNilOrEmpty([]));
    });
    it('true for NOT empty', function () {
        (0, _ptzAssert.ok)(P.isNotNilOrEmpty([1]));
    });
    it('true for NOT empty string', function () {
        (0, _ptzAssert.ok)(P.isNotNilOrEmpty('a'));
    });
});
//# sourceMappingURL=isNotNilOrEmpty.test.js.map
//# sourceMappingURL=isNotNilOrEmpty.test.js.map