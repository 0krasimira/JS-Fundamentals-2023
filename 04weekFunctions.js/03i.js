function charactersInRange (char1, char2) {

let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
let finish = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))

let result = []

for (let i = start + 1; i < finish; i++) {
   let toChar = String.fromCharCode(i)
    result.push(toChar)

}

console.log(result.join(' '))

}

charactersInRange('a', 'd')