function addAndSubtract (arr) {

    let newArr = []
    let originalSum = 0;
    let modifiedSum = 0;

   
   
    for (let i = 0; i < arr.length; i++) {
        
        originalSum += Number(arr[i])

        let curNum = Number(arr[i])

        if(curNum % 2 === 0) {
            curNum += i
        } else {
            curNum -= i
        }
        

       arr[i] = curNum
       modifiedSum += curNum
       
    }
    console.log(arr)
    console.log(originalSum)
    console.log(modifiedSum)
    

}

addAndSubtract ([5, 15, 23, 56, 35])