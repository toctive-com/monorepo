/**
 * "Verify that a string is between a minimum and maximum length."
 *
 * The function takes a string, a minimum length, a maximum length, and a field name. The field name is
 * used in the error message
 * @param {string} str - The string to verify.
 * @param {number} [min=0] - The minimum length of the string.
 * @param {number} [max=255] - The maximum length of the string.
 * @param {string} [field=Field] - The name of the field you're validating.
 * @returns a boolean.
 */
export default function verifyStringLength(
  str: string,
  min: number = 0,
  max: number = 255,
  field: string = 'Field'
): boolean {
  if (min > max) {
    throw new Error('Min must be less than max.');
  }

  if (str.length > max) {
    throw new Error(`${field} must be less than ${max} characters.`);
  } else if (str.length < min) {
    throw new Error(`${field} must be at least ${min} characters.`);
  }
  return true;
}
