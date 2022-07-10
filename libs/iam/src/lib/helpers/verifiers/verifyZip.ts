import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * If zip is not null, then it must be a string with a length between 5 and 255
 *
 * @param {string | null} zip - string | null
 */
export function verifyZip(zip: string | null) {
  if (zip) {
    isString(zip, 'Zip');
    verifyStringLength(zip, 5, 255, 'Zip');
  }
}
