// Z字形变换
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    s=s.split('')
    var arr = new Array(numRows);
    for(let i=0;i<arr.length;i++){
        arr[i][0]=s[i];
    }
    console.log(arr);
};
convert('plab',3)