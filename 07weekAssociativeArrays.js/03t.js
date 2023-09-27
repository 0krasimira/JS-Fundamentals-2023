function addressBook (input) {

    let myInfo = {}

    for (const el of input) {
        let [name, address] = el.split(':')
        myInfo[name] = address
        
    }

    let sortedArr = Object.entries(myInfo).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))

    for (const [key, value] of sortedArr) {
        
        console.log(`${key} -> ${value}`)
        
    }
}

addressBook (['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])