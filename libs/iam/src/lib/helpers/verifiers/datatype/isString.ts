/**
 * If the string is not a string, throw an error.
 *
 * @param {string} str - The string to validate.
 * @param [field=Field] - The name of the field that is being validated.
 * @returns true
 */
export function isString(str: string, field = 'Field'): boolean {
  if (!str) {
    throw new Error(`${field} is required.`);
  } else if (typeof str !== 'string') {
    throw new Error(`${field} must be a string.`);
  }
  return true;
}
