function inventory (items) {

    let myArrOfItems = items.shift().split(', ')
    // console.log(myArrOfItems)

    let length = items.length

    for(let i = 0; i < length; i++) {
        let command = items[i]
        let curCommand = command.split(' - ')
        i++
        

        while (command !== 'Craft!') {
            let indexOne = curCommand[0]
            let indexTwo = curCommand[1]
            let tokens = indexTwo.split(":")

        if (indexOne == 'Collect') {
            if(!myArrOfItems.includes(indexTwo)) {
                myArrOfItems.push(indexTwo)
            }
        }
        
        if (indexOne == 'Drop') {
            if(myArrOfItems.includes(indexTwo)) {
                let cut = myArrOfItems.indexOf(indexTwo)
                myArrOfItems.splice(cut, 1)
            }
        } 
        
        if (indexOne == 'Combine Items') {
            // let tokens = indexTwo.split(":")
            let oldItem = tokens[0]
            let newItem = tokens[1]
            if (myArrOfItems.includes(oldItem)) {
                let indexOfOld = myArrOfItems.indexOf(oldItem)
            myArrOfItems.splice(indexOfOld + 1, 0, newItem)
            }
        }
        
        if (indexOne == 'Renew') {
                if (myArrOfItems.includes(indexTwo)) {
                let oldEl = myArrOfItems.indexOf(indexTwo)
                myArrOfItems.splice(oldEl, 1)
                myArrOfItems.push(indexTwo)
            }
            
        }
        command = items[i]
        curCommand = command.split(' - ')
        i++
    
        }
    

    if (command = 'Craft') {
        console.log(myArrOfItems.join(', '))
    }
}

} 
inventory ([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
