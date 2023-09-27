function numbers (nums) {

    let numsArr = nums.split(' ').sort((a, b) => b - a)
    let numsCount = 0
    let sum = 0
    let finalArr = []
    let numsArrLength = numsArr.length
    // console.log(numsArr) ['50', '40', '30', '20', '10']

    for (let i = 0; i < numsArrLength; i++) {
        let curEl = Number(numsArr[i])
        numsCount++
        sum += curEl

    }
    
    let average = sum / numsCount
    // console.log(average)

    for(let i = 0; i < numsArrLength; i++) {
        let curEl = Number(numsArr[i])
        
        if(curEl > average) {
            finalArr.push(curEl)
            
        }
        
        if (finalArr.length > 5) {
            finalArr.length == 5
        }
        
        if (finalArr.length == 0) {
            console.log('No')
        }

        }
        
        
        
    
    console.log(finalArr.join(' '))

}

numbers ('10 20 30 40 50')
console.log('------------')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log('----------')
numbers('1')
console.log('-----------')
numbers('-1 -2 -3 -4 -5 -6')