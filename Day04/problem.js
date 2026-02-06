// factorial   ka matlb hai kisi bhi number se shuru ho kr 1 tk wapis jana 
// aur raste main ana wala sara numbers se mutliply krna 
let n = 5;

    let fact = 1;

for (let i = 1 ; i <= n ; i++){
  fact = fact * i;
}

console.log(fact);

// fibonacci series ek sequence ki series hai mtlb ke har naya number pichla 2 numbers ka sum
// ho ke banta hai 
// sequence dekhna hai 5 ,10 ,15 , 20 , 25 ....... 
let number = 125;
let a = 5;
let b = 10;
let c = 0;

while(c<=number){
  c = a + b;
   
  if(c == number){
    console.log("we get the sequence number", c);
    break;
  }
  else{
    a = b;
    b = c;
  }
  
 
}

if(c != number){
    console.log("number is not the part of sequnce :" , c);
  
  }