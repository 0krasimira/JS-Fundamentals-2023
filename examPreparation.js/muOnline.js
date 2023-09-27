function muOnline (data) {

    let health = 100
    let bitcoins = 0

    let dungeonRooms = data.split('|')
    // let commands = dungeonRooms.split(' ')
    let length = dungeonRooms.length
    let curCommand = ''
    
    let rooms = 0

    for (let i = 0; i < length; i++) {
        curCommand = dungeonRooms[i]
        let curRoom = curCommand.split(' ')
        let command = curRoom[0]
        let points = Number(curRoom[1])
        
        if (command == 'potion') {
            rooms++
            let difference = 100 - health
            health += points
            if (health > 100) {
                console.log(`You healed for ${difference} hp.`)
                health = 100
            console.log(`Current health: ${health} hp.`)
            } else {
            console.log(`You healed for ${points} hp.`)
            console.log(`Current health: ${health} hp.`)
            }
        } else if (command == 'chest') {
            bitcoins += Number(points)
            rooms++
            console.log(`You found ${points} bitcoins.`)
        } else {
            rooms++
            health -= Number(points)
            if (health > 0) {
            console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                // bestRoom.push(Number([i]) + 1)
                console.log(`Best room: ${rooms}`)
                return;
                
            }
        }
    }
    
    
    console.log("You've made it!")
    console.log(`Bitcoins: ${bitcoins}`)
    console.log(`Health: ${health}`)
    
   
}

muOnline ("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log('================================')
muOnline ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")