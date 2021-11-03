// Your task is to return a number from a string.
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
var FilterString = function(value) {  
  return parseInt(value.match(/\d+/g).join(''));
}   // Best Practices and clever solution

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');