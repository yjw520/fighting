function pigIt(str){
    //Code here
    // var words=str.split(' ')
    // //words=words.forEach(word =>  word.slice(1) + word.toString().shift() +'ay')
    // words=words.map(word => word.slice(1) + word.charAt(0) +'ay').join(' ')
    // console.log(words)
    // return words
    //return str.split(' ').map(word => word.slice(1) + word.charAt(0) +((/^[a-zA-Z]+$/.test(word))?'ay':'')).join(' ')
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
  } 
  console.log(pigIt('hello world !'))