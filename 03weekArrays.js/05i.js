function maxNumber (arr) {


    let result = '';
    let arrLength = arr.length

    for(let i = 1; i <= arrLength; i++) {
        
      
        let isBiggest = true
        let curNum = Number(arr[i - 1]) 

        for (let j = i; j < arr.length; j++) {

            let nextNum = Number(arr[j])
        

        if (nextNum >= curNum) {
            isBiggest = false;
            break;
        
        }
        
    }

    if (isBiggest) {
        result += `${curNum} `
    }

}
    console.log(result)
}



maxNumber ([1, 4, 3, 2])