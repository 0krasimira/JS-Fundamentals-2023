function furniture (input) {

    let regEx = />>(?<type>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/
    let totalSum = 0

    console.log("Bought furniture:")
    for (const el of input) {

        let result = el.match(regEx)

        if(result) {
            let item = result.groups.type
            console.log(item)
            let price = result.groups.price
            let count = result.groups.quantity
            totalSum += price * count
            
        }

        
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)

}

furniture (['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])