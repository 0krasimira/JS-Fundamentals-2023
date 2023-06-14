function maxSequenceOfEqualElements (arr) {


    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let curNum = Number(arr[i]);
            let prevNum = Number(arr[i - 1])

            if (curNum === prevNum) {
                sequence++

                if(sequence > maxSequence) {
                    maxSequence = sequence
                    maxSequenceNumber = curNum
                }
            } else {
                sequence = 1
            }
        }
    }

    console.log(`${(maxSequenceNumber+ ' ').repeat(maxSequence)}`)

}

maxSequenceOfEqualElements ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )
