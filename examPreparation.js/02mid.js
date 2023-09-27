function coffeeLover (data) {

    let myCoffeeList = data.shift().split(' ')
    // console.log(myCoffeeList)

    let commandsCount = Number(data.shift())
    // console.log(commandsCount)
    

    for(let i = 0; i < data.length; i++) {
        let commands = data[i]
        let currentArrOfCommands = commands.split(' ')
        let action = currentArrOfCommands[0]
        let indexOne = currentArrOfCommands[1]
        let indexTwo = currentArrOfCommands[2]
        // console.log(action)

        switch (action) {
            case 'Include': 
            myCoffeeList.push(indexOne)
                break;
        
            case "Remove":
                if(indexOne == 'first') {
                    myCoffeeList.splice(myCoffeeList[0], indexTwo)
                } else if (indexOne === 'last') {
                    myCoffeeList.slice(myCoffeeList.length, indexTwo)
                }

                // if (commandsCount < indexTwo) {
                //     continue;
                break;

            case "Prefer":
            // if(myCoffeeList.includes(curCoffee) && myCoffeeList.includes(nextCoffee).indexOf(indexTwo)) {
            //     let temp = myCoffeeList[indexOne]
            //     myCoffeeList[indexOne] = myCoffeeList[indexTwo]
            //     myCoffeeList[indexTwo] = temp

            let curCoffee = myCoffeeList[indexOne]
            let nextCoffee = myCoffeeList[indexTwo]
                if (myCoffeeList.indexOf(curCoffee) > -1 && myCoffeeList.indexOf(nextCoffee > -1)) {
                    let currentItem = myCoffeeList.splice((curCoffee), myCoffeeList.indexOf(nextCoffee))
                    myCoffeeList.push(currentItem[0])
            }
                break;

            case "Reverse":
                myCoffeeList.reverse()
                break;
        }

    }
    console.log('Coffees:')
console.log(myCoffeeList.join(' '))
// console.log('----------------------------------------------')
// console.log('OrdinaryCoffee Robusta StrongCoffee TurkishCoffee BulkCoffee')
}

coffeeLover (["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])