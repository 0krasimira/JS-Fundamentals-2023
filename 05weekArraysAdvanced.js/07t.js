function listOfProducts (products) {

    let productsInOrder = products.sort()
    
    let result = ''
    for(let i = 0; i < products.length; i++) {

        console.log(`${i + 1}.${productsInOrder[i]}`)
}
}


listOfProducts (['Potatoes', 'Tomatoes', 'Onions',
'Apples'])
