function magicSum (arr, n) {

    

    for (let i = 0; i < arr.length; i++) {
        

        if (i !== 0) {
            let prevNum = Number(arr[i - 1])
            for(let j = i; j < arr.length; j++) {
                let curNum = Number(arr[j])
                let sum = curNum + prevNum
                if (sum === n) {
                    console.log(`${prevNum} ${curNum}`)
                }
            }
            
        }
        
    }
    

}

magicSum ([14, 20, 60, 13, 7, 19, 8], 27)
