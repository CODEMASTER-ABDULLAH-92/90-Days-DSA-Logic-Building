let arr = [2, 3, 4, 7, 11, 13];
let target = 9;

for (let i = 0; i <= arr.length; i++) {
    // console.log("Array of i " , arr[i]);
    for (let j = i + 1; j <= arr.length; j++) {
        // console.log("array of j" ,arr[j])
        let twoSum = arr[i] + arr[j];
        if (twoSum === target) {
            console.log([i, j]);
            return;
        }
    }
}