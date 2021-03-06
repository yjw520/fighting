// 判定是否为字符重排
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    s1=s1.split('') 
    s2=s2.split('')
    if(s1.length != s2.length){
        return false
    }
    var f=false;
    for(let i=0;i<s1.length;i++){
        for(let j=0;j<s2.length;j++){
            if(s1[i] == s2[j]){
                f=true
                s2.splice(j,1)
                console.log(s2);
                continue
            }
        }
        if(f == false){
            return false
        }
    }
    return true
};
// var CheckPermutation = function(s1, s2) {
//     return s1.split('').sort().toString() === s2.split('').sort().toString()
//  };

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
//  var CheckPermutation = function(s1, s2) {
//     const counter = {};

//     // 扫描 s1 的字符记数
//     for(var c of s1){
//         if(!counter[c]) {
//             counter[c] = 1;
//         }else{
//             counter[c]++;
//         }
//     }

//     // 扫描 s2 的字符
//     for(var c of s2){
//         if(!counter[c]) {
//             // 没在 s1 中出现过，或数量比 s1 多，则跳出
//             return false;
//         }else{
//             // 记数减一
//             counter[c]--;

//             // 减空移除 key
//             if(counter[c] === 0){
//                 delete counter[c];
//             }
//         }
//     }

//     // 扫描完如果计数器中没全部清零，则证明不能同等变换
//     return Object.keys(counter).length === 0;
// };


// console.log(CheckPermutation('abc','bca'));
// console.log(CheckPermutation('abccaccf','bcaaccfc'));
// console.log(CheckPermutation('abb','aab'));
console.log(CheckPermutation('bkhfhqlayvlhdqmxvnkqvtkojouugfsnwmyoywkilsnubnkvhdbrltuxvoblurpfinpigajttcvkcxlylblcaocsjmwdvwepvnfr','mtycyvobjldulmhsuqvtrhqnisjkuxhvaxqkvpbllnkvvakxjbolefpyrtiivvwctunasbbocldflkcknmwgofngorduwlwhyfnp'));