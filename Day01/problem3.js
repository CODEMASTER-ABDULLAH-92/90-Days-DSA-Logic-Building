// sum of  1 -> n
let n = 10;
let sum = 0;

for (let i = 1 ; i<=n ; i++){
    sum = sum + i;
}

console.log("Sum : " , sum)

// appraoch kya hai iski
// pehla sbse n ko 10 value assign hogi 
// uska baad sum ko 0 value assign hogi 
// pehli daga loop chala ka toh i initialize hoga 0 se aur condition check hogi aur post increment 
// hoga 

// pehla iteration hoga sum 0 hoga , sum + i ki value zero hogi theek aur loop ki body complete 
// hogi toh i ki value 1 hojai gi 

// iteration 2 - i = 1 , sum = 0 + 1 , sum = 1

// iteration 3 - i = 2 , sum = 1 + 2 , sum = 3

// iteration 4 - i = 3 , sum = 3 + 3 , sum = 6

// iteration 5 - i = 4 , sum = 6 + 4 , sum = 10

// iteration 6 - i = 5 , sum = 10 + 5 , sum = 15

// iteration 7 - i = 6 , sum = 15 + 6 , sum = 21

// iteration 8 - i = 7 , sum = 21 + 7 , sum = 28

// iteration 9 - i = 8 , sum = 28 + 8 , sum = 36

// iteration 10 - i = 9 , sum = 36 + 9 , sum = 45

// iteration 11 - i = 10 , sum = 45 + 10 , sum = 55

// iteration 12 - i = 11 , condtion false , loop end and total value of sum after loop is 55


