// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens){
  // your code here
  let count = 0;
  let arr = parens.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '(') {
      count++;
    } else if (arr[i] == ')') {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }   if (count == 0) {
    return true;
  } else {
    return false;
  }  
}

console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);