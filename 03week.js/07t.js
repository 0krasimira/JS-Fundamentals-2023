function equalArrays (firstArray, secondArray) {

let sumOfFirstArray = 0;
for (let i = 0; i < firstArray.length; i++) {

    if(firstArray[i] !== secondArray[i]) {

        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
    }

    sumOfFirstArray += Number(firstArray[i])
    
}
    
    console.log(`Arrays are identical. Sum: ${sumOfFirstArray}`);
}

equalArrays (['10','20','30'], ['10','20','30'])