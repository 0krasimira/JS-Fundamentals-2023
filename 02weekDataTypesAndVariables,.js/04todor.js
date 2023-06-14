function integerAndFloat (a, b, c) {
    
    let sum = a + b + c
    if (sum % 1 === 0) {
        console.log(`${sum} - ${'Integer'}`)
    } else {
        console.log(`${sum} - ${'Float'}`)
    }


}

integerAndFloat (100, 200, 303)