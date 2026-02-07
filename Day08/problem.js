// functions block of code hain main jb chaho tab chaa skta hoon - function is like control
// jb main function ko call karta hoon tab wo execute hota hain
// agr app function ke sath return value use kr raha hain uska baad code execute nai hota.


// function - keyword
// name - function name
// () - parameters
// {} - function body
// return - return value
// function call -  name()
// parameters - function ke sath jo values pass hoti hai
// arguments - function call ke sath jo values pass hoti hai




// sum function problem
function sum(a, b){
    return a + b;
}

console.log(sum(1, 2));

// max of 2 numbers

function max(n1 , n2){
  let max = 0;
  if(n1 == n2){
     return false  
  }
  
  if(n1 > n2){
    max = n1
  }
  else{
    max = n2
  }
  
  return max;
  
}

console.log(max(2,3))
