// Generate a Password Validator
function generateRegex(charClasses, minLength) {
  let regex = '';
  for (let i = 0; i < charClasses.length; i++) {
    regex += charClasses[i];
  }
  regex = new RegExp(`[${regex}]{${minLength}}`);
  return regex;
  
}