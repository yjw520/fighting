/**
 * @param {number[]} T
 * @return {number[]}
 */
//每日温度
//  var dailyTemperatures = function(T) {
//      var hash=[]
//      console.log(T)
//      for(let i=0;i<T.length;i++){
//          for(let j=i+1;j<T.length;j++){
//              if(T[j]>T[i]){
//                  hash.push(j-i)
//                  break;
//              }else{
//                  if(j==(T.length-1))
//                     hash.push(0)
//              }
//          }
//      }
//      hash.push(0)
//      return hash
// };

// vector<int> dailyTemperatures(vector<int> &T) {
//     stack<int> helpSatck;
//     int length = T.size();
//     vector<int> res(length);
//     for (int i = 0; i < length; i++)
//     {
//         while (!helpSatck.empty() && T[i] > T[helpSatck.top()])
//         {
//             res[helpSatck.top()] = i - helpSatck.top();
//             helpSatck.pop();
//         }
        
//         helpSatck.push(i);
//     }

//     return res;
// }

var dailyTemperatures = function(T) {
    let stack = [];
    let result = new Array(T.length).fill(0);
    
    for(let i = 0; i<T.length;i++){
        while(!isEmpty(stack)&&T[peek(stack)]<T[i]){
            result[peek(stack)] = i-peek(stack);
            stack.pop();            
        }
        stack.push(i);
    }
    return result;
};

function isEmpty(arr){
    return arr.length==0;
}
function peek(arr){
    return arr[arr.length-1];
}


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))