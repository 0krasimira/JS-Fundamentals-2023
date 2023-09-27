function smallestTwoNumbers (arr) {

let sortedAr = arr.sort((a, b) => a - b)
let result = sortedAr.splice(0, 2).join(' ')
console.log(result)
}

smallestTwoNumbers ([30, 15, 50, 5])