function reverseInPlace (arr) {

    
    for (let i = 0; i < arr.length / 2; i++) {
        
        tempString = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempString;
}

console.log(arr.join(' '));
}

reverseInPlace (['abc', 'def', 'hig',
'klm', 'nop'] )