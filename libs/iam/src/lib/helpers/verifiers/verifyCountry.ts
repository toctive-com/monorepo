import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';

/**
 * If the country is not null, then it must be a string that is at least 2 characters and less than 255
 * characters
 *
 * @param {string | null} country - string | null
 */
export function verifyCountry(country: string | null) {
  if (country) {
    isString(country, 'Country');
    verifyStringLength(country, 2, 255, 'Country');
  }
}
