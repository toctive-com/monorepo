/**
 * If the birthday is not null, then it must be a Date and it must be more than 13 years old
 *
 * @param {Date | null} birthday - Date | null
 */
export function verifyBirthday(birthday: Date | null) {
  if (birthday) {
    if (!(birthday instanceof Date)) {
      throw new Error('Birthday must be a Date.');
    }

    const currentDate = new Date();
    const DateBefore13Years = new Date(
      currentDate.getFullYear() - 13,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    if (birthday > DateBefore13Years) {
      throw new Error('Birthday must be more than 13 years old.');
    }
  }
}
