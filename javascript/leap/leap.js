// Attempt 1, with nested if statements.
/* export const isLeap = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}; */

// Attempt 2 using Conditional (ternary) Operator
export const isLeap = (year) => { return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); };
//   if year is divisible by 100 it will calculate if year is divisible by 400. If year is not divisible by 100 it will calculate if year is divisible by 4.
//   return x;
// ;
