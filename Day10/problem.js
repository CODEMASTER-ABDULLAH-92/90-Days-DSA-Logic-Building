// create a function to count digits of a number
function countDigits(n){
  let count = 0;
  
  while(n>0){
    n = Math.floor(n/10);
    count++
  }
  
  return count;
  
}


console.log(countDigits(1))



// power function (x, n)

function power(x,n){
  let result = 1;
  
  for (let i = 1 ; i<=n ; i++){
    result = result * x;
  }
  
  return result
  
}

console.log(power(2, 6))