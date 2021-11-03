// In order to be more clear, we use ABCDEF to represent the screws.
// The number in brackets is the time(seconds)
function sc(screws) {
  return screws.match(/(?=(\+-|-\+))/g).length*5+screws.length*2-1;
}

console.log(sc("---+++"), 16);
console.log(sc("-+-+-+"), 36);
console.log(sc("-+-+-----------"), 49);
console.log(sc("-+-+-++++++++++"), 54);