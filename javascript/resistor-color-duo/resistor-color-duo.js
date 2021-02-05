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
  const values = arr.map((i, index) => {
    if (index < 2){
      return COLORS.indexOf(i);
    }
  })
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