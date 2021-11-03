// The function accepts an integer and returns an integer
function squareDigits(num){
  return parseInt(num.toString().split('').map(x => x*x).join(''));
}