function theImitationGame(data){
   
let textToDecode = data.shift()

for (let line of data) {

    if (line === 'Decode') {
        break;

}
let token = line.split('|')
let action = token[0]
// console.log(action)

switch (action) {
    case 'Move':
        let n = Number(token[1])
        for(let i = 0; i < n; i++) {
            let lettersToMove = textToDecode.substring(0, 1)
            let leftLetters = textToDecode.substring(1)
            textToDecode = leftLetters + lettersToMove
            // console.log(textToDecode)
        }
        break;


    case 'Insert':
        let index = Number(token[1])
        let firstPart = textToDecode.substring(0, index) + token[2]
        let secondPart = textToDecode.substring(index)
        textToDecode = firstPart + secondPart
        // console.log(firstPart)
                
        break;

    case 'ChangeAll':
        for (let element of textToDecode) {
            textToDecode = textToDecode.replace(token[1], token[2])
            
        }
        break;
}
}

console.log(`The decrypted message is: ${textToDecode}`)
 
}
    

theImitationGame ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
   ]
   )
   console.log('-------------------------')
   theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?', 
    'Decode'])