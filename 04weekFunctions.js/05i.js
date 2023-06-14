function palindromeIntegers (arr) {

    for (let i = 0; i < arr.length; i++) {
        
        let reverseNum = arr[i].toString().split('').reverse().join('');
        reverseNum = Number(reverseNum)
    
      if(reverseNum === arr[i]) {
        console.log('true')
      } else {
        console.log('false')
      }
        
    
    }

}

palindromeIntegers ([123,323,421,121])