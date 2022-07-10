import { SanitizeI } from '../../core/interfaces';
import { verifyImageURL } from './verifyImageURL';

/**
 * "If the cover image is not null, then it must be less than 2048 characters, longer than 4
 * characters, and a valid URL."
 *
 * @param {string | null} coverImage - string | null
 * @param {SanitizeI} sanitize - SanitizeI
 */
export function verifyCoverImage(
  coverImage: string | null,
  sanitize: SanitizeI
) {
  if (coverImage) {
    verifyImageURL(coverImage, 'Cover image', sanitize);
  }
}
