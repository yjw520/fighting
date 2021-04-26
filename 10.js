/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
     var str=[];
     var m,n=-1;
     str=haystack.split('');
     for(let i=0;i<str.length;i++){
         m=0;
         if(needle.charAt(0)==str[i]){
             n=i;
            //  console.log(i)
             for(let j=0;j<needle.length;j++,n++){
                 if(needle[j]!=str[n]){
                     continue
                 }
                 m++;
             }
             if(m==needle.length){
                return i
            }
         }
     }
     if(needle.length==0){
         return 0
     }
     if(str.length<needle.length){
         return -1
     }
     return n
};
console.log(strStr('hello','ll'))
console.log(strStr('aaaaa','bba'))
console.log(strStr('',''))
console.log(strStr('aaaaa','aa'))
console.log(strStr('mississippi','issip'))
console.log(strStr('mississippi','pi'))


// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//  var strStr = function(haystack, needle) {
//     if (!needle) return 0
//     let i = 0
//     while (i < haystack.length) {
//       let j = 0
//       while (j < needle.length) {
//         if (haystack[i + j] === needle[j]) {
//           j++
//           if (j === needle.length) return i
//         } else {
//           i++
//           break
//         }
//       }
//     }
//     return -1
//   }