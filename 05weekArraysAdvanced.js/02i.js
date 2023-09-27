function distinctArray (input) {

let myArr = []

for (const el of input) {
    if(!myArr.includes(el)) {
        myArr.push(el)
    }
    
    
}
console.log(myArr.join(' '))
}

distinctArray ([7, 8, 9, 7, 2, 3,
    4, 1, 2])