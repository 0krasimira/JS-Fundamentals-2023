function emojiDetector (input) {

    let coolnessThreshholdArr = []
    let totalCoolness = 1
    let infoArr = input.shift().split(' ')

    for (let el of infoArr) {
        console.log(el)
        el = Number(el)
        if (!isNaN(el)) {
            coolnessThreshholdArr.push(el)
        }
        
    }

    let coolness = coolnessThreshholdArr.join('').split('')
    console.log(coolness)
    for (let el of coolness) {
    totalCoolness *= Number(el)
    }
    console.log(totalCoolness)

    
    let pattern = /(:{2}|\*{2})(?<words>[A-Z][a-z]{2,})(\1)/gm


}

emojiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('------')
emojiDetector (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])