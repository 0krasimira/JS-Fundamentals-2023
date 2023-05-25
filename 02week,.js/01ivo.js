function sumDigits (number) {

    let sum = 0;
    let numAsString = number.toString()

    for (let i = 0; i <= numAsString.length - 1; i++){
        sum += Number(numAsString[i])
    }
    console.log(sum)

    

}

sumDigits (543)