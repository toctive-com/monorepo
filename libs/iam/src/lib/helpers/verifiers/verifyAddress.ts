import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * If the address is not null, then it must be a string with a length between 5 and 255 characters
 *
 * @param {string | null} address - string | null
 */
export function verifyAddress(address: string | null) {
  if (address) {
    isString(address, 'Address');
    verifyStringLength(address, 5, 255, 'Address');
  }
}
