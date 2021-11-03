// using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
function josephusSurvivor(n,k){
  //your code here
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(i+1);  
  }
  let j = 0;  
  while(arr.length > 1){ 
    j = (j + k - 1) % arr.length;
    arr.splice(j, 1); 
  }
  return arr[0];
}

console.log(josephusSurvivor(7,3),4)
console.log(josephusSurvivor(11,19),10)
console.log(josephusSurvivor(1,300),1)
console.log(josephusSurvivor(14,2),13)
console.log(josephusSurvivor(100,1),100)