function messageEncrypter(input) {
 
    let copyedInput = input.slice();
    let inputNumbers = copyedInput.shift();
 
    let pattern = /([$%])(?<tag>[A-Z][a-z]{2,})\1:\s{1}(?<nums>\[[0-9]+]\|)+/g;
 
    for (let line of copyedInput) {
        let match = line.match(pattern)
 
        if (match !== null && match[0] === line) {
            let splited = match.join('').split(': ');
            let currTag = splited[0];
 
            let nums = splited[1].split('|');
            let lastEl = nums.pop();
 
            if (nums.length > 3) {
                console.log('Valid message not found!');
            } else {
                nums = nums
                    .join('')
                    .split('[')
                    .join('')
                    .split(']');
                let lastEl = nums.pop();
                let numsToNum = nums.map(x => Number(x));
 
                let decrMessage = '';
 
                for (currNum of numsToNum) {
                    decrMessage += String.fromCharCode(currNum);
                }
 
                let printTag = '';
 
                if (currTag.includes('$')) {
                    printTag = currTag.split('$').join('');
                } else {
                    printTag = currTag.split('%').join('');
                }
 
                console.log(`${printTag}: ${decrMessage}`);
            }
 
        } else {
            console.log('Valid message not found!');
        }
    }
}
messageEncrypter (["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"])

console.log('-----------')

messageEncrypter (["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"])