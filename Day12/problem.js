// largest and second largest element in array

let arr = [1,27,76,4,4,6];

let max = arr[0];
let secondMax = -Infinity;


for (let i = 1 ; i < arr.length ; i++){
  console.log(arr[i]);
  if(arr[i] > max){
     secondMax = max;
     max = arr[i]
  }
  else if(arr[i] > secondMax && arr[i] !== max){
    secondMax = arr[i]
  }
}

console.log("largest and second largest  is " , max , secondMax)


// approach is simple iterate the array if number is greater it is max and other is second max 
// and if number is less than max and greater than second max then it is second max
