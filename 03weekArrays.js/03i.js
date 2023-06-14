function mergeArrays (arr1, arr2) {

    let curEl = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            curEl = Number(arr1[i]) + Number(arr2[i])
        } else {
            curEl = (arr1[i]) + (arr2[i])
        }

        arr1[i] = curEl
        
        
    }
    console.log(arr1.join(' - '))
}

mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])