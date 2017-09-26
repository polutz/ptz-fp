"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * run console.log() and return the same obj
 * @param  {any} o any object
 * @return {any}   same object
 */
var log = exports.log = function log() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (obj) {
    var _console;

    (_console = console).log.apply(_console, args.concat([obj]));
    return obj;
  };
};
//# sourceMappingURL=log.js.map
//# sourceMappingURL=log.js.map