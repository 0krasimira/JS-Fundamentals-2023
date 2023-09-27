function bombNumber (sequence, details) {

    let specialNumber = Number(details[0])
    let detonationPower = Number(details[1])
    for (let i = 0; i < sequence.length; i++) {

        if ((sequence[i]) === specialNumber) {
            sequence.splice(i - detonationPower > 0 ? i - detonationPower : 0, detonationPower * 2 + 1)
            i = 0
        }
    }
    console.log(sequence.reduce((a, b) => a + b, 0))
    
    

    // if(detonedArr.includes(specialBombNum)) {
    //  detonedArr.splice(specialNumberIndex, detonedNumsCount + 1)
    // console.log(detonedArr.splice(specialNumberIndex, detonedNumsCount + 1))
    // }
}

bombNumber ([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2])