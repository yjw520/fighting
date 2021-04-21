// function persistence(num) {
//     //code me
//    var x=1;
//    count=1;
//    while(num!=0){
//        x=x*(num%10);
//       // console.log(x)
//        num=parseInt(num/10);
//        count++;
//    }
//    if(x>9){
//        //console.log(x);
//        persistence(x);
//        return count++  
//    }
//    //console.log(count)
//    return count-1
//  }



// function persistence(num) {
//     //code me

//     var count=0;
//     var x=num;
//     while(x>9){
//         x=1;
//         while(num!=0){
//             x=x*(num%10);
//             num=parseInt(num/10);
//         }
//         num=x;
//         count++;
//     }
//    return count
//  }
 const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }
 console.log(persistence(5))
 console.log(persistence(1000))
 console.log(persistence(39))
 console.log(persistence(999))

  