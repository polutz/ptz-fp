'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNilOrEmpty = require('./isNilOrEmpty');

Object.keys(_isNilOrEmpty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isNilOrEmpty[key];
    }
  });
});

var _isNotNilOrEmpty = require('./isNotNilOrEmpty');

Object.keys(_isNotNilOrEmpty).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isNotNilOrEmpty[key];
    }
  });
});

var _log = require('./log');

Object.keys(_log).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _log[key];
    }
  });
});
//# sourceMappingURL=index.js.map