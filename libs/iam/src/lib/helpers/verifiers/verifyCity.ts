import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * If the city is not null, then it must be a string with a length between 2 and 255 characters
 *
 * @param {string | null} city - string | null
 */
export function verifyCity(city: string | null) {
  if (city) {
    isString(city, 'City');
    verifyStringLength(city, 2, 255, 'City');
  }
}
