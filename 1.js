var longestCommonPrefix = function(strs) {
    //一个一个比较,更新出相同前缀,再和下一个比较
    if(strs.length==0){
            return "";
        }
        let first = strs[0];
        //i表示数组中第几个字符串
        for(let i =1 ;i<strs.length;i++){
            //j表示第一个字符串的第j个字符
            let j =0 ; // 为什么需要这样写呢? 因为后面需要利用j这个数字,不能放在for循环里面
            for(;j<=first.length && j<=strs[i].length;j++){
               if(first.charAt(j) !== strs[i].charAt(j)) { break;}// break只是退出内循环
            }
            //这里的first 在第一个字符和第二个字符比较之后就会更新
            first = first.substr(0,j); 
        }
         return first; // 这一步代表每一轮对比都更新出最新的相同前缀
    };
    
    /*substr(begin,length))   substring(start,end)   左闭右开,substring里的参数不能为负值  slice(start,end)*/
    console.log([""])
    console.log(longestCommonPrefix(["fla","flb"]))
