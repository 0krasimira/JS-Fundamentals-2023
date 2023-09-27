function oddOccurences (input) {

    let inputArr = input.split(' ').map(el => el.toLowerCase())
    let wordsObject = {}

    for (const word of inputArr) {
        if(!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0
        }
        wordsObject[word]++;
        
    }

    let arrOfOddElements = Object.entries(wordsObject).filter(pair => pair[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);
    let result = ''

    for (const el of arrOfOddElements) {
        result += `${el[0]} `
    }
    console.log(result)
}

oddOccurences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log('----------------------')
oddOccurences ('Cake IS SWEET is Soft CAKE sweet Food')