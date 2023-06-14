function triangleOfNumbers (number){

    let result = ' '
    for (let row = 1; row <= number; row++) {
        for (let col = 1; col <= row; col++) {
            result += `${row} `
        }
        console.log(result);
        result = ' '
    }

}

triangleOfNumbers (8)