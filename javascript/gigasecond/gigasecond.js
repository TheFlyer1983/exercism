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
  const gigasecondInMS = Math.pow(10,12);
  const newDate = new Date(date.getTime() + gigasecondInMS);
  return newDate;
};