/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const a=[];
    a[0]=1;
    a[1]=1;
    for(let i=2;i<=n;i++){
        a[i]=a[i-1]+a[i-2]
    }
    return a[n]
};
console.log(climbStairs(5))