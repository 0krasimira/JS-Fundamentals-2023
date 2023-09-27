function censoredWords (text, singleWord) {

    let result = text.split(singleWord)
    console.log(result)

    if(text.includes(singleWord)) {
        let replacer = "*".repeat(singleWord.length)
        result = text.replace(singleWord, replacer)
        console.log(result)
     }
    
    // let sentence = text.split(singleWord)
    // console.log(sentence.join("*".repeat(singleWord.length)))
    
    

}

censoredWords ('Find the meow word', 'meow')