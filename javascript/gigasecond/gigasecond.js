//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * gigasecond
 * @param {Date} date
 * @returns {Date}
 */
export const gigasecond = (date) => {
  const newMilliseconds = (((date.getTime() / 1000) + 1000000000) * 1000);
  const newDate = new Date(newMilliseconds);
  return newDate;
};