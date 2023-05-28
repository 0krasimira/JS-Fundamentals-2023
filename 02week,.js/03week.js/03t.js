function reverseAnArrayOfNumbers (n, arr) {

    let newArr = []

    for (let i = 0; i < n; i++) {
        //console.log(i)
        newArr[newArr.length] = arr[n - i - 1];
        
    }
    console.log(newArr.join(' '))





}

reverseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])