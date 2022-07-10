import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * If the state is not null, it must be a string with a length between 2 and 255 characters
 *
 * @param {string | null} state - The address state
 */
export function verifyState(state: string | null) {
  if (state) {
    isString(state, 'State');
    verifyStringLength(state, 2, 255, 'State');
  }
}
