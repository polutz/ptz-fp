'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotNilOrEmpty = exports.isNilOrEmpty = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if an array or string Is null or Empty.
 * @param {string|*[]} value
 */
var isNilOrEmpty = exports.isNilOrEmpty = _ramda2.default.anyPass([_ramda2.default.isNil, _ramda2.default.isEmpty]);
/**
 * Checks if an array is or string Is NOT null or Empty.
 */
var isNotNilOrEmpty = exports.isNotNilOrEmpty = _ramda2.default.compose(_ramda2.default.not, isNilOrEmpty);
//# sourceMappingURL=isNilOrEmpty.js.map
//# sourceMappingURL=isNilOrEmpty.js.map