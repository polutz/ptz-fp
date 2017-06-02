import { anyPass, isEmpty, isNil } from 'ramda';
/**
 * Checks if an array or string Is null or Empty.
 * @param {string|*[]} value
 */
export const isNilOrEmpty = anyPass([isNil, isEmpty]);
//# sourceMappingURL=isNilOrEmpty.js.map