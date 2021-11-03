// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]
function f(s) {
  return [s.match(/(.)\1*/g).sort((a, b) => b.length - a.length)[0], s.match(/(.)\1*/g).sort((a, b) => b.length - a.length).length];
}