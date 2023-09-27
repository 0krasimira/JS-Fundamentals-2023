function modernTimes(text) {

    let textAsArr = text.split(' ')
    // console.log(textAsArr)

    for (let word of textAsArr) {
        

                if (word[0] === '#' && word.length > 1) {
                    // word = word.substring([1], word.length)
                    let wordsArr = word.split('')
                    wordsArr.shift()
                    let finalWord = ""
                    for (const char of wordsArr) {
                        
                        if (char.charCodeAt(char) >= 65 && char.charCodeAt(char) <= 90 || char.charCodeAt(char) >= 97 && char.charCodeAt(char) <= 122) {
                            finalWord+=char
                        } else {
                            finalWord = ""
                            break;
                        }
                            
                }
                if(finalWord.length > 0){
                    console.log(finalWord)
                }
            }

        

    
}
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log('-----------------------')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
