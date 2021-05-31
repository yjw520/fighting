// 整数转罗马数字
/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let romanSymbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let result = '';
    // factor 位数因子
    for(var factor = 1; factor <= 4 && num >= Math.pow(10,  factor-1); factor++ ){
        let val = Math.floor(num / (Math.pow(10, factor-1))) % 10;
        if(val){
            let tmp = '';
            if(val <= 3){
                 for(i = 0; i < val; i++) tmp += romanSymbol[(factor - 1)*2];
            }else if(val <= 8){
                for(i=0; i< Math.abs(val-5); i++) tmp += romanSymbol[(factor - 1)*2];
                if(val>5) 
                    tmp = romanSymbol[(factor - 1)*2+1] +tmp;
                else 
                    tmp +=romanSymbol[(factor - 1)*2+1];
            }else { // val == 9的情况
                tmp = romanSymbol[(factor - 1)*2] + romanSymbol[factor*2];
            }
            result = tmp+ result;
        }
    }
    return result;
};