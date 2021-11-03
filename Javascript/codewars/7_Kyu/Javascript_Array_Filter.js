// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter(function(number){
    return number % 2 === 0;
  }); 
}

console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
console.log(getEvenNumbers([1,2]), [2])
console.log(getEvenNumbers([12,14,15]), [12,14])
console.log(getEvenNumbers([13,15]), [])
console.log(getEvenNumbers([1,3,9]), [])