function  countStringOccurrences (sentence, searchedWord) {

  let words = sentence.split(' ')
//   console.log(words)
let counter = 0

  for (const el of words) {
    
    if(el == searchedWord) {
        counter++
    }
    
  }
  console.log(counter)
}

countStringOccurrences ('This is a word and it also is a sentence','is')
console.log('----------------------------')
// countStringOccurrences ('softuni is great place for learning new programming languages', 'softuni')