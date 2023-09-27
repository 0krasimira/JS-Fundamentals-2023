function destinationMapper(input) {

    let pattern = /(?<special>=|\/)[A-Z][A-Za-z]{2,}(\1)/gm
    let points = 0
    let validDestination = []
    let match = pattern.exec(input)
    // console.log(match)

    while (match) {
        validDestination.push(match[0])
        match = pattern.exec(input)
    }

    // console.log(validDestination.join(', '))
    let destArr = []
    for (el of validDestination) {

        el = el.substring(1, el.length - 1)
        destArr.push(el)

        let pointsForEch = el.length

        points += pointsForEch

    }

    console.log(`Destinations: ${destArr.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
console.log('--------------')
destinationMapper("ThisIs some InvalidInput")