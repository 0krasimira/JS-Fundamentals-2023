function sorting (input) {

    let sortedArr = input.sort((a, b) => b - a)
    let result = []
    let sortedLength = sortedArr.length
    for (let i = 0; i < sortedLength; i++) {
        let currentNum = sortedArr.shift()
        let lastNum = sortedArr.pop()
        result.push(currentNum)
        result.push(lastNum)
    }
console.log(result.join(' '))
}

sorting ([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])