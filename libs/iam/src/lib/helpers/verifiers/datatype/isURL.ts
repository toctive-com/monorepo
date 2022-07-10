/**
 * It returns true if the given string is a valid URL, and false otherwise
 *
 * @param {string} url - string - The URL to validate.
 * @returns A function that takes a string and returns a boolean.
 */
export default function validateURL(url: string): boolean {
  let _url: URL | null = null;

  try {
    _url = new URL(url);
  } catch (error) {
    return false;
  }

  return _url?.protocol === 'http:' || _url?.protocol === 'https:';
}
