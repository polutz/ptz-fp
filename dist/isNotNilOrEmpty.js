'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotNilOrEmpty = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _isNilOrEmpty = require('./isNilOrEmpty');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if an array or string are NOT null, undefined or Empty.
 */
var isNotNilOrEmpty = exports.isNotNilOrEmpty = _ramda2.default.compose(_ramda2.default.not, _isNilOrEmpty.isNilOrEmpty);
//# sourceMappingURL=isNotNilOrEmpty.js.map
//# sourceMappingURL=isNotNilOrEmpty.js.map