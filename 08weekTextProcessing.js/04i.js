function stringSubstring (word, text) {

    let textArr = text.split(' ')
    // console.log(textArr)

    let isNotFound = true
    for (const el of textArr) {
        
        if (word.toLowerCase() === el.toLowerCase()) {
            console.log(el.toLowerCase())
            isNotFound = false
            break;
        }
            
        
        
    }

    if (isNotFound) {
        console.log(`${word} not found!`)
        
    
}
}

stringSubstring ('python', 'JavaScript is the best programming language')