function treasureHunt (input) {

  
    let arrInitialLoot = input.shift().split('|')
    // console.log(ArrInitialLoot)
  

    let index = 0
    let command = input[index]
    index++

    while (command !== 'Yohoho!') {
        let curCommand = command.split(' ')
        let action = curCommand[0]
        
       
        if (action == 'Loot') {
            for (let i = 1; i < curCommand.length; i++) {
            let curItem = curCommand[i]
            if(!arrInitialLoot.includes(curItem)) {
                arrInitialLoot.unshift(curItem)
            }
            }
            
            } else if (action == 'Drop') {
                let drop = Number(curCommand[1])
                let item = arrInitialLoot[drop]
                if(drop >= 0 || drop < arrInitialLoot.length){
                if(arrInitialLoot.includes(item)) {  
                arrInitialLoot.splice(drop, 1)
                arrInitialLoot.push(item)
                }
                }
            } else if (action === 'Steal') {
                let stealCount = Number(curCommand[1])
                console.log(arrInitialLoot.splice(-stealCount).join(', '))
              
            }
            command = input[index]
            index++
        }

    
        
        if (arrInitialLoot.length > 0) {
            let sum = 0
            for (const el of arrInitialLoot) {
                sum += el.length
            }
            let averageTreasureGain = sum / arrInitialLoot.length
            console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`)
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
console.log('-----------------------------------')
treasureHunt (["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])