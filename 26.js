//url化
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S, length) {
    S = S.split('')
    for(let i=0;i<length;i++){
        if(S[i]==' '){
            S[i] = '%20'
        }
    }
    return S.join('')
};
var replaceSpaces = function(S, length) {
    return S.substr(0, length).split(' ').join('%20')
 };
console.log(replaceSpaces('Mr John Smith    ',13));
console.log(replaceSpaces('     ',5));