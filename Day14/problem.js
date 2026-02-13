// frequency of an array 
let arr = [1,2,2,4,5];

let count = {};

for(let i = 0 ; i<=arr.length-1 ; i++){
    console.log(arr[i]);
    let val = arr[i];
    if(count[val]){
        count[val] = count[val]+1;
    }else{
        count[val] = 1;
    }    

}
console.log(count)


// checking for dulplicate values 
for (const val in count) {
   
    if(count[val] > 1){
        console.log("Duplicate values are : ",val);
    }
    
}

