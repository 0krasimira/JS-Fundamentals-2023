function firstAndAlastKNumbers (data) {

   let slicor = Number(data[0])
   

   let arrLength = Number(data.length)
  
   let newArr = data.slice(1,(slicor + 1))
   let secondArr = data.slice((arrLength - slicor))
   console.log(newArr.join(' '))
   console.log(secondArr.join(' '))

}

firstAndAlastKNumbers 
([2,
    7, 8, 9]
    
    )    
    
    