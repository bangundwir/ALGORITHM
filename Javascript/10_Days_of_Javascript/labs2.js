
// /*
//  * Complete the vowelsAndConsonants function.
//  * print your output using 'console.log()'.
//  */
// function vowelsandconsonants(s) {
//     // write your code here
//     var vowels = "aeiou";
//     var consonants = "bcdfghjklmnpqrstvwxyz";
//     for (var i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             console.log(s[i]);
//         }
//     }
//     for (var i = 0; i < s.length; i++) {
//         if (consonants.includes(s[i])) {
//             console.log(s[i]);
//         }
//     }
// }
// vowelsandconsonants('javascript');

// =============================== ///

// function regexVar() {
//     /*
//      * Declare a RegExp object variable named 're'
//      * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
//      */
//     var re = /^([aeiou]).*\1$/;
    
    
    
//     /*
//      * Do not remove the return statement
//      */
//     return re;
// }

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    // your code goes here
    try {
      s = s.split('').reverse().join('');
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(s);
    }
}

reverseString(12345); 