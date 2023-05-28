function equalArrays (firstArray, secondArray) {

let sumOfFirstArray = 0;
let areEqual = true;
for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = Number(firstArray[i])
    sumOfFirstArray += firstArray[i]
    if(firstArray[i] !== secondArray[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`)
        areEqual = false;
        break;

}

for (let i = 0; i < secondArray.length; i++) {
    secondArray[i] = Number(secondArray[i])
    
    }
}

}

equalArrays (['10','20','30'], ['10','20','30'])