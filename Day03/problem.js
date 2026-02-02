// reverse a number
let n = 12345;

let rev = 0;

while(n > 0){
  let digit = n % 10;
  
  rev = (rev * 10) + digit;
  
  n  = Math.floor(n / 10);
}

console.log(rev)


// approach yeh hai ke humhain ek variable le raha hai jo ke reverse number ko store karta hai 
// jb hum number ko 10 se divide kara ga toh last digit mil jai ga wo hum reverse ko 10 se 
// muliply krka add krda ga aur end prr number ko chota kara ga jb tk 0 se chota nai hojata 
// math.floor is liya taka points wali value na ayy 
