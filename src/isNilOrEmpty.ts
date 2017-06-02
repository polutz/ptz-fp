import R from 'ramda';

/**
 * Checks if an array or string Is null or Empty.
 * @param {string|*[]} value
 */
export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

/**
 * Checks if an array is or string Is NOT null or Empty.
 */
export const isNotNilOrEmpty = R.compose(R.not, isNilOrEmpty);
