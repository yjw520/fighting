/**
 * @param {string} s
 * @return {boolean}
 */

const leftToRight={//map结构
    "(":")",
    "[":"]",
    "{":"}"
}
 var isValid = function(s) {
    //  if(!s){
    //      return true
    //  }
    s=s.toString().split('')
    console.log(s)
    var str=[],i=0;
    for(i=0;i<s.length;i++){
            if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
                str.push(s[i]);
            }else{
                if(str.length==0)
                    return false  
                else{
                    if((s[i]==')'&&str[str.length-1]=='(') || (s[i]=='}' && str[str.length-1]=='{') || (s[i]==']' && str[str.length-1]=='[')){
                        console.log(str)
                        str.pop()
                    }
                    else{
                        return false
                    }
                }
            }
    }
    console.log(str)
    if(str.length==0)
        return true
    return false
    
    // console.log(s.pop())
    


    //初始化一个栈
    // const stack[]
    // const len=s,length
    // for(let i=0;i<length;i++){
    //     //遇到左括号就入栈
    //     //否则就将栈里面的元素取出来比较
    //     const ch=s[i]
    //     if(ch==='(' || ch==='[' || ch==='{' ){
    //         stack.push(leftToRight[ch])
    //     }else{
    //         if(!stack.length || stack.pop() !==ch){
    //             return false
    //         }
    //     }
    // }
    // return !stack.length
};
console.log(isValid('([])'))
console.log(isValid('([)]'))
console.log(isValid(']'))
console.log(isValid('()'))
console.log(isValid('(])'))