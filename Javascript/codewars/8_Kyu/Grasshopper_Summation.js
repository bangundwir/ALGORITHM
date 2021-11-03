// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  // Code here
  let sum = 0;
  if (num === 1) {
    return 1;
  } else {  // num > 1
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  } 
} 

console.log(summation(1), 1)
console.log(summation(8), 36)