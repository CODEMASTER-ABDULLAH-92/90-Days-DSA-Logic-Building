let str = 'MARKRAM';


function isValidPalindrome(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        if (str[left] === str[right]) {
            left++
            right--
        }
    }

    return true

}

console.log(isValidPalindrome(str))