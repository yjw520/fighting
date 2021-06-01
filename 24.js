// 判断字符串是否唯一
/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    let arr = astr.split('');
    for(let i = 0; i < arr.length - 1;i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                return false
            }
        }
    }
    return true
};