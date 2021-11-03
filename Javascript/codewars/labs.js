// Longest vowel chain

function solve(s) {
    return s.split('').reduce((a, b) => { 
        if (a.length > 0 && a[a.length - 1] === b) {
            return a;
        }
        return a + b;
    }, ''); 
}