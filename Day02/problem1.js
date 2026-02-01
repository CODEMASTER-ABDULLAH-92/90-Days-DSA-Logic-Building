// count of digits 
let count = 0;
let n = 345;

while(n > 0){
   n = Math.floor(n / 10);
   count++
}

console.log("count of digits : " , count)

// output count of digits : 3

// iteration 1 n > 0 yani 345 bara tha zero se condition hogai true 
// 345 ko 10 se divide kiya toh 34 bach gaya point ki value math.floor na khatam krdi
// count ki value 1 hogai 

// iteration 2 main n > 0 yani 34 bara tha zero se condition hogai true 
// 34 ko 10 se divide kiya toh 3 bach gaya 
// count ki value 2 hogai 

// iteration 3 main n > 0 yani 3 bara tha zero se condition true hoi 
// 3 ko  10 se divide kiya toh value 0 hogai 
// count ki value 3 hoagai 

// iteration 4 main n > 0 yani 0 > 0 se bara nai hai condition false 
// loop khatam hogaya aur count ki value 3 mil gai 


// approach - Math.floor is liya use kiya hai ke loop 327 baar 
// chalta hai usi wajah yeh value kabhi zero ke nai hoti points main chalti hai 


// 
let sum = 0;
let number = 345;

while(number>0){
    let digit = number % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);   
}

console.log("sum of digits : " , sum);

// output - sum of digits : 12

// approach - pehla hum digit nikala ga modulo se aur uska baad sum nikala ga 
// phir math.floor use krka ek ek nuber milta jai ga 10 se divide krna ke baad 

// Iteration 1 - number > 0  yani 345 bara hai 0 se condition hogai true 
// 345 % 10 kara ga toh 5 remainder ayy ga wo sum main add hojai ga 
// sum ki value hogai 5 aur 345 / 10 se 34 agya math.floor ki wajah se 34 ajai ga 

// iteration 2 - number > 0 yani 34 bara hai 0 se condition hogai true 
// 34 % 10 kara ga toh remainder 4 bacha ga wo sum main add hojai ga 
// sum ki value hogai 9 aur 34 / 10 se 3 agya math.floor ki wajah se 

// iteration 3 - number > 0 yani 3 bara hai zero se condition true hogai 
// 3 % 10 hoga toh remadier 3 ayy ga wo sum hojai ga sum ka variable main value hojai 12
// 3 / 10 hoga toh value 0 ajai gi 

// iteration 4 - number > 0 yani 0 na bara hai na chota hai condition false hogai 
// loop break - sum of digits show hojai ga 


