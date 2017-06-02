import R from 'ramda';
import { isNilOrEmpty } from './isNilOrEmpty';

/**
 * Checks if an array or string are NOT null, undefined or Empty.
 */
export const isNotNilOrEmpty = R.compose(R.not, isNilOrEmpty);
