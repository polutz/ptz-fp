'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var P = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('log', function () {
    it('return same obj', function () {
        var obj = { a: 'test' };
        var loggedObj = P.log(obj);
        (0, _ptzAssert.equal)(obj, loggedObj);
    });
});
//# sourceMappingURL=log.test.js.map
//# sourceMappingURL=log.test.js.map