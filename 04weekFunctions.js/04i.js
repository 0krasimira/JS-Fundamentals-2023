function  oddAndEvenSum (number) {

    let numAsString = number.toString()
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < numAsString.length; i++) {
        let curDigit = Number(numAsString[i])
        

        if(curDigit % 2 === 0) {
            evenSum += curDigit
        } else {
            oddSum += curDigit
        }
    }

 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum (3495892137259234)