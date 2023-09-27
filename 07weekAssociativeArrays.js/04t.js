function storage (data) {

    let map = new Map()

    for (const el of data) {
        let item = el.split(' ')
        let product = item[0]
        let quantity = Number(item[1])

        if (!map.has(product)) {
            map.set(product, +quantity)
            }else{
                let curQuantity = map.get(product)
                let newQuantity = curQuantity += quantity
                map.set(product, newQuantity)
            }
    }
       
    
            for (let items of map) {
                console.log(`${items[0]} -> ${items[1]}`)
            }
    }
        




storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])