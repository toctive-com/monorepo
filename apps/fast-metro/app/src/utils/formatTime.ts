/**
 * It takes a number of seconds and returns a string of the format "minutes : seconds"
 *
 * @param {number} seconds - number - the number of seconds to format
 * @returns A string with the minutes and seconds of the time.
 */
export const formatTime = (seconds: number) => {
  // TODO: calculate the time depending on peak time or not and depending on the lines in the trip
  return `${Math.floor(seconds / 60)} : ${zeroPad(
    seconds - Math.floor(seconds / 60) * 60
  )}`;
};

/**
 * Converting the number to a string, then padding it with
 * zeros to the left.
 * If the number of places is not passed in, then default to 2.
 *
 * @param {number} num - The number to pad.
 * @param [places=2] - The number of digits to return.
 */
const zeroPad = (num: number, places = 2) => String(num).padStart(places, '0');
