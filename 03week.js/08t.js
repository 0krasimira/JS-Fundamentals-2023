function condenseArrayToNumber (num) {
    
   
    let result = [];
    
   while (num.length > 1) {
   for(let i = 0; i < num.length - 1; i++) {  
    result[i] = num[i] + num[i + 1];
          
    }

    num = result;
    result = []
        
    }
    console.log(Number(num))   
        
        

}

condenseArrayToNumber ([2,10,3])
