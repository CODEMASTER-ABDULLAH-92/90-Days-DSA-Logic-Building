// problem container with most water 

let arr = [3, 9, 3, 4, 7];

let left = 0;
let right = arr.length - 1 

let maxArea = 0

while (left < right){
 let currentHeight = Math.min(arr[left], arr[right]);
 
 let distance = right - left;
if(arr[left] < arr[right]){
  
  left++;
}
else{
  right--
  
}



let currentArea = currentHeight * distance;
console.log("MAX AREA ki Iterations " , currentArea)

if(currentArea > maxArea){
  maxArea  = currentArea
}
}

console.log("Continer with most water : " , maxArea)
