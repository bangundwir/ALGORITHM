// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight) {
    return true;
  } else if (yourLeft === friendsRight && yourRight === friendsLeft) {
    return true;
  } else {  return false; }   
}

console.log(areEquallyStrong(10,15,15,10),true)

console.log(areEquallyStrong(15,10,15,10),true)

console.log(areEquallyStrong(10,10,10,10),true)

console.log(areEquallyStrong(15,10,15,9),false)

console.log(areEquallyStrong(10,5,5,10),true)

console.log(areEquallyStrong(1,10,10,0),false)

console.log(areEquallyStrong(10, 5, 11, 4),false)
