let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let maxSumArray = -Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i]);
    let sum = 0
    for (let j = i; j <= arr.length - 1; j++) {
        // console.log("sub array ",arr[j]);
        sum += arr[j]
        if (sum > maxSumArray) {
            maxSumArray = sum;
        }

    }






}
console.log("This maximum of sub array ", maxSumArray);