function replaceRepeatingChars (string) {

let output = string[0]
let stringLength = string.length

for (let i = 1; i < stringLength; i++) {
    let curEl = string[i]
    let prevEl = string[i - 1]
    if (curEl !== prevEl) {
        output += curEl

    }
}
console.log(output)
}

replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa')