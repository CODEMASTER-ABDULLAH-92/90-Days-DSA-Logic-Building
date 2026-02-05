// NESTED LOOPS 
// ek loop ke andar dusra loop nested loop kehlata hai mtlb loops ki herarch.
// Outer loop rows control krta hai aur inner loop columns ko 
// jb outer loop 1 iteration perform krta hain toh inner loop ek dafa pura chal jata hai hai apni limit tak.
// jb andar wala loop khatam hota hai toh outer loop ek step bharta hai 


// square pattern 
for(let i =1 ; i<5 ; i++){
  let row = ""
  for(let j = 1 ; j<=4 ; j++){
        row = row + "*";
  }
  console.log(row)
}

// ****
// ****
// ****
// ****

// approach inner loop main fixed number set krda condition prr


// square pattern 
for(let i =1 ; i<5 ; i++){
  let row = ""
  for(let j = 1 ; j<=i ; j++){
        row = row + "*";
  }
  console.log(row)
}

// *
// **
// ***
// ****

// approach inner loop ko outer loop variable tk fix kara 

