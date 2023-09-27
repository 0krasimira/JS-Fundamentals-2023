function computerStore(arr) {

    let totalPrice = 0
    let totalPriceWithTaxes = 0
    let onlyTaxes = 0

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        i++


        while (command !== 'special' && command !== 'regular') {
            

            if(command < 0) {
                curPrice = 0
                console.log('Invalid price!')
                command = arr[i]
                i++
                continue
                
            } else {
            let curPrice = Number(command)
            let tax = curPrice * 0.2
            totalPrice += curPrice
            onlyTaxes += tax
            totalPriceWithTaxes = totalPrice + onlyTaxes

            }

            command = arr[i]
            i++
        }
        if (command === 'special') {
            totalPriceWithTaxes *= 0.9
            
        }
        if (totalPriceWithTaxes == 0) {
            console.log('Invalid order!')
            break
        }

        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
        console.log(`Taxes: ${onlyTaxes.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
        
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
console.log('-------------------')
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
])
console.log('-----------------')
computerStore([
'regular'
])