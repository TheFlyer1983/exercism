//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * decodedValue
 * @param {Array<string>} arr 
 * @return {number} 
 */

export const decodedValue = (arr) => {
  return Number(arr.slice(0, 2).map(i => COLORS.indexOf(i)).join(''));
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];