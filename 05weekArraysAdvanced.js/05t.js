function processOddNumbers (data) {


    console.log(data.filter((el, i) => i % 2 !== 0).map(el => el * 2).reverse().join(' '))


    // let oddIndexArray = data.filter((el, i) => i % 2 !== 0) 

    // let multipliedArr = oddIndexArray.map(el => el * 2)
   
    // let reversedArr = multipliedArr.reverse()
    // console.log(reversedArr.join(' '))


   
}

processOddNumbers([3, 0, 10, 4, 7, 3])