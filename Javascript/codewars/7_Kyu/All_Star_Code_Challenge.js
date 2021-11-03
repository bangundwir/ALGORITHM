// // All Start Code Challenge #14
// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function called median() that takes an array of integers as an argument and returns the median of those integers.
function median(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    var middle = Math.floor(array.length / 2);
    if (array.length % 2) {
        return array[middle];
    } else {
        return (array[middle - 1] + array[middle]) / 2.0;
    } 
}

console.log(median([33,99,100,30,29,50]), 41.5);
console.log(median([3,2,1]),2);