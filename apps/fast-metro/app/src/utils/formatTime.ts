/**
 * It takes a number of seconds and returns a string of the format "minutes : seconds"
 *
 * @param {number} seconds - number - the number of seconds to format
 * @returns A string with the minutes and seconds of the time.
 */
export const formatTime = (seconds: number) => {
  return `${Math.floor(seconds / 60)} : ${
    seconds - Math.floor(seconds / 60) * 60
  }`;
};
