import R from 'ramda';
/**
 * Checks if an array or string Is null or Empty.
 * @param {string|*[]} value
 */
export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
//# sourceMappingURL=isNilOrEmpty.js.map