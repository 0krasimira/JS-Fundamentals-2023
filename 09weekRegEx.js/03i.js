function softuniBarIncome (input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g

    // let match = pattern.exec(input)
    let totalIncome = 0
    let curLine = input.shift()
    // let validInfo = []
    

    

    while (curLine !== 'end of shift') {

        let match = [...curLine.matchAll(pattern)]
        // let customer = match.groups.customer
        // let product = match.groups.product
        // let count = match.groups.count
        // let price = match.groups.price
        // let curPrice = price * count
        // validInfo.push(match[0])
        // match = pattern.exec(input)
        
        for (const el of match) {
            let curPrice = Number(el.groups.price)* Number(el.groups.count)
            totalIncome += curPrice
            console.log(`${el.groups.customer}: ${el.groups.product} - ${curPrice.toFixed(2)}`)
            
        }
        
        
        curLine = input.shift()
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)

}

softuniBarIncome (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)