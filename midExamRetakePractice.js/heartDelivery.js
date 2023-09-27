function heartDelivery (input) {

    
    let neighbourhood = input.shift().split('@').map((x) => Number(x)) // [10, 10, 10, 2]
    let neighbourhoodLength = neighbourhood.length
    let startIndex = 0
    let command = input.shift()
    

    while (command !== 'Love!') {

        command = command.split(' ')
        let jumps = Number(command[1])
        startIndex += jumps

        if(startIndex > neighbourhood.length - 1) {
            startIndex = 0
        } 

        if(neighbourhood[startIndex] === 0) {
            console.log(`Place ${startIndex} already had Valentine's day.`)
        } else {
            neighbourhood[startIndex] -= 2
            if(neighbourhood[startIndex] === 0) {
                console.log(`Place ${startIndex} has Valentine's day.`)
                neighbourhoodLength--
            }
        }

        command = input.shift()
    }

    console.log(`Cupid's last position was ${startIndex}.`)

        let total = 0
        for (let el of neighbourhood) {
            if (el === 0) {
                total++
            }
        }
            if (total === neighbourhood.length) {
                console.log("Mission was successful.")
            } else {
                console.log(`Cupid has failed ${neighbourhoodLength} places.`)
            }
        
    
        
}

heartDelivery (["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
console.log('-------------')
heartDelivery (["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])