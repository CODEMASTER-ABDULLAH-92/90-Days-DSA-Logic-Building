// prime number check
let n = 11;

let isPrime = true;

for (let i = 2 ; i < n ; i++){
  if(n%i === 0){
    isPrime = false;
    break;
  }
}

if(isPrime){
  console.log(n + " is a prime number.")
}
else{
  console.log(n + " is not a prime number");
}


// approach of a prime number check using forloop 
// prime number wo hota hain jo khud prr divide ho aur 1 prr
// 2 hi sirf even prime number hai 



// print 1 to 100 prime numbers 
for(let i =2 ; i<101 ; i++){
    let count = 0;
      for(let j = 2 ; j <i ; j++){
        if(i%j === 0){
          count = count + 1;
          break;
        }
      }
      if(count === 0){
        
      console.log("prime number :",i)
      }
    }


// approach of a prime number print ka yeh hai humhain yahan 2 loop lagana para ga 
// outer loop for 1 to 100
// inner loop for 2 to i-1
// jb humhain 0 se bari count hoga toh humhain break krna para ga
// jb humhain 0 se bari count nai hoga toh humhain print krna para ga