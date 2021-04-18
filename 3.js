var isPalindrome = function(x) {
    var a;
    a=x.toString().split('').reverse();
    x=x.toString().split('');
    for(var i=0;i<x.length;i++){
        if(a[i]!=x[i]){
            return false
        }
    }
    return true
};

// var isPalindrome = function(x) {
//     return x === Number(x.toString().split('').reverse().join(''))
// };

console.log(isPalindrome(10))
console.log(isPalindrome(-121))
console.log(isPalindrome(121))