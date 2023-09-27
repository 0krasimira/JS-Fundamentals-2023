function matchFullName (names) {


    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
    let result = []
    let match = pattern.exec(names)

    while (match) {
        result.push(match[0])
        match = pattern.exec(names)
    }

    console.log(result.join(' '))

}

matchFullName ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")