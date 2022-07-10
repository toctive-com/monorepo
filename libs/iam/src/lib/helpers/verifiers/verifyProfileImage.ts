import { SanitizeI } from '../../core/interfaces';
import { verifyImageURL } from './verifyImageURL';

/**
 * "If the profile image is not null, then it must be less than 2048 characters, longer than 4
 * characters, and a valid URL."
 *
 * @param {string | null} profileImage - string | null
 * @param {SanitizeI} sanitize - SanitizeI - This is the sanitize interface.
 */
export function verifyProfileImage(
  profileImage: string | null,
  sanitize: SanitizeI
) {
  if (profileImage) {
    verifyImageURL(profileImage, 'Profile image', sanitize);
  }
}
