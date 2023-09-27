function numbers (arr) {

    let arrayOfNumbers = arr.shift().split(' ').map(Number)
    let arrLength = Number(arrayOfNumbers.length)
    // console.log(arrLength)

    let overallValue = 0
    let averageValue = 0
    

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // console.log(arrayOfNumbers[i])

        overallValue += Number(arrayOfNumbers[i])
        averageValue = Number(overallValue / arrLength )      
        
    }

    for (const el of arrayOfNumbers) {
        if (el > averageValue) {
            arr.push(el)
        } else {
            let isSmaller = true
            if (!isSmaller) {
                console.log('No')
            } 
        }
    

    }

    

    let sorted = arr.sort((a, b) => b - a)
console.log(sorted.join(' '))
    
    
}

numbers (['5 2 3 4 -10 30 40 50 20 50 60 60 51'])