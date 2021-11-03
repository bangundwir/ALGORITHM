// Credit Card Mask
// return masked string
function maskify(cc) {
    if (cc.length <= 4) return cc;
    let masked = "";
    for (let i = 0; i < cc.length - 4; i++) {
        masked += "#";
    }
    return masked + cc.substring(cc.length - 4);
} 

console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
console.log(maskify('4556364607935616'), '############5616');