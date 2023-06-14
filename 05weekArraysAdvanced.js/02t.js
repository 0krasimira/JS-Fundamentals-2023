function negativeOrPositiveNumbers (arr) {

    let result = []
    for (let el of arr) {
        
        
        if(el < 0) {
            result.unshift(el)
        } else {
           result.push(el)
        }
        
    }
    console.log(result.join('\n'))
}

negativeOrPositiveNumbers (['7', '-2', '8', '9'])
