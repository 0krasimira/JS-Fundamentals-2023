function manOWar(input) {

    let pirateship = input.shift().split('>').map(y => Number(y)) // ['12', '13', '11', '20', '66']
    let warship = input.shift().split('>').map(x => Number(x)) // ['12', '22', '33', '44', '55', '32', '18']
    let maximumHealthCapacity = Number(input.shift()) // 70
    let pirateSum = 0
    let warSum = 0
    let isWinner = false

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ') // ['Fire', '2', '11']
        let action = command[0] // Fire

        if (action == 'Retire') {
            break
        }
        switch (action) {
            case 'Fire':
                let index = Number(command[1]) // 2
                let damage = Number(command[2]) // 11

                if (index >= 0 && index <= warship.length) {
                    warship[index] -= damage // 33 - 11 -> 22
                    // maximumHealthCapacity -= damage // 70 - 11 -> 59
                    if (warship[index] <= 0) {
                        isWinner = true
                        console.log("You won! The enemy ship has sunken.")
                        break;
                    }
                }

                break;

            case 'Defend':
                let startIndex = Number(command[1]) // 3
                let endIndex = Number(command[2]) // 6
                let curDamage = Number(command[3]) // 11

                if ((startIndex >= 0 && startIndex <= pirateship.length) && (endIndex >= 0 && endIndex <= pirateship.length)) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateship[j] -= curDamage // [7, 8, 6, 15, '66'] 
                        // maximumHealthCapacity -= j * curDamage
                        if (pirateship[j] <= 0) {
                            isWinner = true
                            console.log("You lost! The pirate ship has sunken.")
                            break;
                        }
                    }
                }

                break;

            case 'Repair':
                // isWinner = false
                let repairIndex = Number(command[1]) // 1
                let health = Number(command[2]) // 33

                if (repairIndex >= 0 && repairIndex <= pirateship.length) {

                    pirateship[repairIndex] += health
                    if (pirateship[repairIndex] + health <= maximumHealthCapacity) {
                        pirateship[repairIndex] = pirateship[repairIndex] + health
                    }

                }

                break;

            case 'Status': // [7, 41, 6, 15, '66']
                let count = 0

                for (let k = 0; k < pirateship.length; k++) {
                    if (pirateship[k] < maximumHealthCapacity * 0.2) {
                        count++

                    }
                }
                console.log(`${count} sections need repair.`)

                break;
        }

    }
    for (const section of pirateship) {
        pirateSum += section
    }
    for (const section of warship) {
        warSum += section
    }

    if (isWinner == false) {
        console.log(`Pirate ship status: ${pirateSum}`)
        console.log(`Warship status: ${warSum}`)
    }


}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
console.log('-----------')
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])