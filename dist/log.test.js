'use strict';

var _ptzAssert = require('ptz-assert');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _index = require('./index');

var P = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('log', function () {
    it('return same obj', function () {
        var a = function a(x) {
            return x;
        };
        var b = function b(x) {
            return x;
        };
        var pipe = _ramda2.default.pipe(a, P.log('after a'), b, P.log('after b'));
        var obj = { a: 'test' };
        var loggedObj = pipe(obj);
        (0, _ptzAssert.equal)(obj, loggedObj);
    });
});
//# sourceMappingURL=log.test.js.map
//# sourceMappingURL=log.test.js.map