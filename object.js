function storage (arr) {

    let myMap = new Map


for (const line of arr) {
    let tokens = line.split(' ')
    let item = tokens[0]
    let quantity = Number(tokens[1])
    
    if (!myMap.has(item)) {
        myMap.set(item, quantity)
    } else {
        myMap.set(item, myMap.get(item) + quantity)
        
        
    }
}

for (const [key, value] of myMap) {
    console.log(`${key} -> ${value}`)
}
}


storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)