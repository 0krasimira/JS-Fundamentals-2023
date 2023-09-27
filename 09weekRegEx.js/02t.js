function matchPhoneNumber (numbers) {
    
    let pattern = /\+359([ |-])2(\1)[0-9]{3}(\1)[0-9]{4}\b/g

    let validPhones = []

    let match = pattern.exec(numbers)

    while(match) {
        validPhones.push(match[0])
        match = pattern.exec(numbers)
    }

    console.log(validPhones.join(', '))
}

matchPhoneNumber (['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])