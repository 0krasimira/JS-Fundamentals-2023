function sumFirstAndLastArrayElements (arr) {

    let firstEl = arr[0];
    let lastElIndex = arr.length - 1
    let lastEl = arr[lastElIndex]

    console.log(firstEl + lastEl)
}

sumFirstAndLastArrayElements ([10, 17, 22, 33])