function storeProvision (stock, order) {

    let localStoreStorage = {}


    for (let i = 0; i < stock.length; i+=2){
    let product = stock[i]
    let quantity = Number(stock[i + 1])
    localStoreStorage[product] = quantity
}
    
for (let i = 0; i < order.length; i+=2) {
    let product = order[i]
    if (!localStoreStorage.hasOwnProperty(product)) {
        localStoreStorage[product] = 0
    }
    localStoreStorage[product] += Number(order[i + 1])

}

for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`)
    }


}

storeProvision ([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])