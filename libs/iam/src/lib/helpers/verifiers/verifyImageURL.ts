import { isString } from './datatype/isString';
import verifyStringLength from './verifyStringLength';
import { SanitizeI } from '../../core/interfaces';
import { Sanitize } from '../sanitize';

/**
 * Verify if the image is a valid URL.
 *
 * @param {string | null} image - The image URL to be validated.
 * @param {string} [field=Field] - The name of the field that is being validated.
 */
export function verifyImageURL(
  image: string | null,
  field: string = 'Field',
  sanitize: SanitizeI = new Sanitize()
) {
  // TODO: validate if the image is a file with extension jpg, jpeg, png or gif.
  if (image) {
    isString(image, field);

    // URL has maximum size of 2KB in some browsers.
    // Check: https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers
    verifyStringLength(image, 4, 1024 * 2, field);

    if (!sanitize.validateURL(image)) {
      throw new Error(`${field} must be a valid URL.`);
    }
  }
}
