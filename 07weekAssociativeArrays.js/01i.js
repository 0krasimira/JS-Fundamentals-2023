function wordsTracker (input) {

let map = new Map()



let searchedWords = input.shift().split(' ')

for (const word of searchedWords) {
    map.set(word, 0)
}

for (const word of input) {
    if(map.has(word)) {
        map.set(word, map.get(word) + 1)
    }
    
}

let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

for (const [word, count] of sorted) {
    console.log(`${word} - ${count}`);
    
}
}

wordsTracker ([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])