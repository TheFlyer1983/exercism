//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * X and Y Co-ordinates
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

export const score = (x, y) => {
  const center = 0;
  const innerRadius = 1;
  const middleRadius = 5;
  const outerRadius = 10;

  const pointPosition = Math.sqrt((Math.pow((x - center), 2) + Math.pow((y - center), 2)));
  
  if (pointPosition <= innerRadius) {
    return 10;
  } else if (pointPosition > innerRadius && pointPosition <= middleRadius) {
    return 5;
  } else if (pointPosition > middleRadius && pointPosition <= outerRadius) {
    return 1;
  } else if (pointPosition > outerRadius) {
    return 0;
  }
}