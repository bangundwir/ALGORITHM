// // Longlest vowel chain
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
function solve(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let longest = 0;
  let current = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      current++;
    } else {
      current = 0;
    }
    longest = Math.max(longest, current);
  } return longest;

}

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);