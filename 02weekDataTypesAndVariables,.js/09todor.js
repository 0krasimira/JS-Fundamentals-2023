function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {

        let curNum = i;
        let curSum = 0;
        while (curNum > 0) {
            curSum += curNum % 10;
            curNum = parseInt(curNum / 10);
        }

        if (curSum == 5 || curSum == 7 || curSum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}
    



specialNumbers (15)