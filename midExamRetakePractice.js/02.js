function memoryGame (arr) {

    let sequence = arr.shift().split(' ') // ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5']
    let halfLength = sequence.length / 2
    let moves = 0
    
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        i++
           
        while(command !== 'end') {
        
        let [token1, token2] = command.split(' ') 
        
            for (let j = 0; j < sequence.length; j++) {
                console.log(sequence[j])

                if (sequence[j] == )
            }
        
        command = arr[i]
        i++
        }
        
        
        }
        
          
        
    
    console.log(sequence)

}




memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
console.log('---------------')
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])
