function wordOccurances (input) {

    let map = new Map()

    for (const word of input) { 
        if(!map.has(word)) {
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])

    for (const [word, counter] of sorted) {
        console.log(`${word} -> ${counter} times`);
    }
}



wordOccurances (["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])