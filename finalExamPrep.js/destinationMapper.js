function destinationMapper (info) {

    let pattern = /(?<separator>[=||\/])(?<destination>[A-Z][A-Za-z]{2,})\1/gm
    
    let validDestinations = []

    let match = pattern.exec(info)
    
    while(match) {
        
        let place = match.groups.destination
        validDestinations.push(place)
        match = pattern.exec(info)
    }

    console.log(`Destinations: ${validDestinations.join(', ')}`)

    let length = validDestinations.join('').length
    console.log(`Travel Points: ${length}`)

}

destinationMapper (("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
console.log('----------')
destinationMapper(("ThisIs some InvalidInput"))