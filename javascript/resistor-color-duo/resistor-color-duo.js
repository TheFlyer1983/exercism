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
  const values = [];
  for (let i = 0; i < 2; i++) {
    values.push(COLORS.indexOf(arr[i]));
  }
  return Number(values.join(''));
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