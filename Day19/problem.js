// finding target of 2 indecies using Two pointer


let arr = [2, 7, 11, 15];

let target = 9;

let left = 0;
let right = arr.length - 1;

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log([left, right]);
        break;
    }
    else if (sum > target) {
        right--
    }
    else {
        left++
    }
}
