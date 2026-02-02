let n = 121;

let rev = 0;
let original = n;

while(n > 0){
  let digit = n % 10;
  
  rev = (rev * 10) + digit;

  
  n  = Math.floor(n / 10);
}

if(rev === original){
  console.log("Palindrome")
}
else{
  console.log("Not Palindrome")
}

// iss main yeh hoga ke agr loop khatam hona ke baad agr rev aur original bara hain toh wo
// palindrome hai aur nai hai wo palindrome nahi hai 