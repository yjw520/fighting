/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  var mergeTwoLists = function(l1, l2) {
//      var str=l1.concat(l2);
//      var t;
//      for(let i=0;i<str.length;i++){
//          for(let j=i;j<str.length;j++){
//              if(str[i]>str[j]){
//                  t=str[j];
//                  str[j]=str[i];
//                  str[i]=t;
//              }
//          }
//      }
//      return str
// };
var mergeTwoLists = function(l1, l2) {
    var i=0;
    while(l1){
        for(let j=0;j<l2.length;j++){
            if(l2[i]>l1[j]){
                l1[j]=l1[J+1]
            }
        }
    }
};



// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null){
//         return l2;
//     }
//     if(l2 === null){
//         return l1;
//     }
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };
console.log(mergeTwoLists([1,2,4],[1,3,4]))
console.log(mergeTwoLists([],[]))
console.log(mergeTwoLists([],[0]))

