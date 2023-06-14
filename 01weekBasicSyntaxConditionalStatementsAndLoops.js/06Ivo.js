function printAndSum (startNumber, endNumber) {

    let sum = 0;
    let output = ' '

    for (let i = startNumber; i <= endNumber; i++){
        output += i + ' '
        sum += i;
    }

    console.log(output)
    console.log(`Sum: ${sum}`)

}

printAndSum (5, 10)