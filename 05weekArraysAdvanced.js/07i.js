function searchForANumber (arr, details) {


    let elementsTaken = Number(details[0]);
    let elementsDeleted = Number(details[1]);
    let searchedNumber = Number(details[2])
    
    
    let firstAmend = arr.slice(0, elementsTaken)
    // console.log(firstAmend)
    
    firstAmend.splice(0, elementsDeleted)
    // console.log(secondAmend)
    
    let occurances = firstAmend.filter(e => e === searchedNumber).length;
    
        console.log(`Number ${searchedNumber} occurs ${occurances} times.`)
    
    
    }

searchForANumber ([7, 1, 5, 8, 2, 7],
[3, 1, 5]
)