function cutAndReverse (string) {

    let middlelength = Number(string.length / 2)

    
        let firstHalf = string.substring(middlelength, string.length)
        let secondHalf = string.substring(middlelength, firstHalf)
        

        let reversedFirstHalf = firstHalf.split('').reverse().join('')
        let reversedSecondHalf = secondHalf.split('').reverse().join('')
  
           
            
    
            
        
        
        console.log(reversedSecondHalf)
        console.log(reversedFirstHalf)
        
    

    }

cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT')