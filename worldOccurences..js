function wordsTracker (arr) {

    myMap = new Map()

     let searchedWords = arr.shift().split(' ')
    
     for (const word of searchedWords) {
        if(!myMap.has(word)) {
            myMap.set(word, 0)
        }
     }

     for (const word of arr) {
        if(myMap.has(word)) {
            myMap.set(word, myMap.get(word) + 1)
        }
        
    }

    let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1])
    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`)
    }
    
    
    
}

wordsTracker ([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])