// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
function list(names){
  //your code here
  return names.map(x => x.name).join(', ').replace(/, (\w+)$/, ' & $1');
}


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
console.log(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")