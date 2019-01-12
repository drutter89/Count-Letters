function countLetters(str){

    var result ={};
  
    for(var i = 0; i < str.length; i++){
  
      let currentChar = str[i];
  
      if(result[currentChar]){
        result[currentChar]++
      }else{
        result[currentChar] = 1;
  
          }
        }
      return result;
    }
  
    countLetters("Lighthouse in the house");