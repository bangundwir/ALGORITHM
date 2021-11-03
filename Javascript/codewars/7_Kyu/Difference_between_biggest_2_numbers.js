// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.
function diffBig2(arr) {
  let difference = function (a, b) {return Math.abs(a - b);}; 
  let sorted = arr.sort((a, b) => a - b);
  return difference(sorted[0], sorted[1]);
}

console.log(diffBig2([8, 3, 1]), 5);
console.log(diffBig2([1, 8, 3]), 5);
console.log(diffBig2([2, 1]), 1);