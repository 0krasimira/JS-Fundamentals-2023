function treasureHunt (input) {

    let initialLoot = input.shift().split('|') // ['Gold', 'Silver', 'Bronze', 'Medallion', 'Cup']

    
    for (const line of input) { 
        let command = line.split(' ') // ['Loot', 'Wood', 'Gold', 'Coins']
        
        if (command[0] === 'Yohoho!') {
        break
    }
            switch (command[0]) {
                case 'Loot':
                for (let i = 1; i < command.length; i++) {
                    let curItem = command[i]
                    if(!initialLoot.includes(curItem)) {
                        initialLoot.unshift(curItem)
                    }
                }
                    break;

            
                case 'Drop':  // ['Pistol', 'Coins', 'Wood', 'Gold', 'Silver', 'Bronze', 'Medallion', 'Cup']
                    let index = command[1]
                    if (index >= 0 && index <= initialLoot.length) {
                        let curLoot = initialLoot[index]
                        initialLoot.splice(index, 1)
                        initialLoot.push(curLoot)
                    }
                    
                    break;

                case 'Steal': // Pistol Coins Wood Silver Bronze Medallion Cup Gold
                    let length = initialLoot.length
                    if(command[1] <= length) {
                        let stolenItems = initialLoot.splice(initialLoot.length - command[1], initialLoot.length + 1)
                        console.log(stolenItems.join(', '))
                    } else {
                        stolenItems = initialLoot.splice(initialLoot.length - command[1], 0)
                        console.log(stolenItems.join(', '))
                    }
                    
                    break;
            }

          
        
    }
    let sum = initialLoot.join('').length
    let count = initialLoot.length
    let average = sum/count
    if(initialLoot.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }
    
}

treasureHunt (["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
console.log('---------------')
treasureHunt (["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])