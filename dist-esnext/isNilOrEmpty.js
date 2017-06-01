import { anyPass, isEmpty, isNil } from 'ramda';
/**
 * Checks if an array Is null or Empty
 * @param {*[]} value
 */
export const isNilOrEmpty = anyPass([isNil, isEmpty]);
//# sourceMappingURL=isNilOrEmpty.js.map