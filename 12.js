/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  var plusOne = function(digits) {
//      digits=digits.join('')
//      console.log(digits)
//      digits++
//     //  digits=digits.split(' ')
//     console.log(digits)
//      return digits.toString().split('')
// };
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        digits[i] = digits[i] % 10
        if (digits[i]) return digits
    }
    digits.unshift(1)
    return digits
};
console.log(plusOne([9,9]))
console.log(plusOne([1,2,3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,2]))