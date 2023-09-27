function needForSpeed(input) {

    let num = Number(input[0])


    let obj = {}


    for (let i = 1; i <= num; i++) {
        let info = input[i] // Audi A6|38000|62
        let [car, mileage, fuel] = info.split('|')
        mileage = Number(mileage)
        fuel = Number(fuel)

        obj[car] = {
            car,
            mileage,
            fuel
        }
    }


    for (let j = num + 1; j < input.length; j++) {
        let command = input[j] // Drive : Audi A6 : 543 : 47
        let action = command.split(' : ')[0] // Drive, ... Stop
        let comCar = command.split(' : ')[1]
        let comDistance = command.split(' : ')[2]
        comDistance = Number(comDistance)
        let comFuel = command.split(' : ')[3]
        comFuel = Number(comFuel)
        if (command !== 'Stop') {
            switch (action) {
                case 'Drive':

                    if (comFuel < obj[comCar]['fuel']) {
                        obj[comCar]['mileage'] += comDistance
                        obj[comCar]['fuel'] -= comFuel
                        console.log(`${comCar} driven for ${comDistance} kilometers. ${comFuel} liters of fuel consumed.`)
                    } else {
                        console.log("Not enough fuel to make that ride")
                    }

                    if (obj[comCar]['mileage'] >= 100000) {
                        console.log(`Time to sell the ${comCar}!`)
                        delete obj[comCar]
                    }
                    break;

                case 'Refuel':
                    let curFuel = command.split(' : ')[2]
                    curFuel = Number(curFuel)
                    

                    if (obj[comCar]['fuel'] >= 75) {
                        break;
                    } else {
                        if (obj[comCar]['fuel'] + curFuel < 75) {
                            obj[comCar]['fuel'] += curFuel
                            console.log(`${[comCar]} refueled with ${curFuel} liters`)
                        } else if (obj[comCar]['fuel'] + curFuel >= 75) {
                            let diff = 75 - obj[comCar]['fuel']
                            obj[comCar]['fuel'] += diff
                            console.log(`${[comCar]} refueled with ${diff} liters`)
                        }
                    }
                
    
                    break;
                
                case 'Revert':
                    let kms = command.split(' : ')[2]
                    kms = Number(kms)
                    obj[comCar]['mileage'] -= kms
                    if (obj[comCar]['mileage'] < 10000) {
                        obj[comCar]['mileage'] = 10000
                    } else {
                        console.log(`${comCar} mileage decreased by ${kms} kilometers`)
                    }
                    break;
            }

        }
        else {
            for (let el of Object.entries(obj)) {
                console.log(`${el[0]} -> Mileage: ${el[1]['mileage']} kms, Fuel in the tank: ${el[1]['fuel']} lt.`)
            }
        }


    }


}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log('----------------')

needForSpeed ([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])