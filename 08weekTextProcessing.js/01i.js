function revealWords (words, sentence) {

    
let wordsArray = words.split(', ')
let sentenceArray = sentence.split(' ')

for (const el of wordsArray) {
    let censoredWords = '*'.repeat(el.length)
    sentence = sentence.replace(censoredWords, el)
    
    }
    
    console.log(sentence)


}

revealWords ('great, learning',
'softuni is ***** place for ******** new programming languages')
console.log('------------------------')
revealWords ('great',
'softuni is ***** place for learning new programming languages')