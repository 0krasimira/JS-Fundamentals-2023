function passwordValidator (input) {

    let passwordToCheck = input.shift().split(', ').toString()
    // console.log(passwordToCheck)

    for (let i = 0; i < input.length; i++) {
        let command = input[i]
        // console.log(command) // Add 2 p    Make Upper 2

        while (command !== 'Complete') {

            let tokens = command.split(' ')
            let action = tokens.shift()
            // console.log(action) // Add, Replace, Make, Validation
            // console.log(tokens) // ['2', 'p'] , ['Upper', '2']

            switch (action) {
                case 'Insert':
                    let indexToInsert = tokens[0]
                    let char = tokens[1]
                    if (passwordToCheck.indexOf(indexToInsert) >= 0) {
                        passwordToCheck = passwordToCheck.slice(0, indexToInsert) + char + passwordToCheck.slice(indexToInsert);
                    }
                    console.log(passwordToCheck)
                    break;

                case 'Replace':
                    let char2 = tokens[0]
                    let value = tokens[1]
                    break;

                case 'Make':
                    let UpperOrLower = tokens[0]
                    let index = tokens[1]
                    // console.log(index) // 2 --- 3
                    if (UpperOrLower == 'Upper') {
                       let strToUpper = passwordToCheck.substring(index, 1)
                       passwordToCheck = passwordToCheck.replace(strToUpper, strToUpper.toUpperCase())
                       console.log(passwordToCheck)
                    } else if (UpperOrLower == 'Lower') {
                        let strToLower = passwordToCheck.substring(index, 1)
                        passwordToCheck = passwordToCheck.replace(strToLower, strToLower.toUpperCase())
                        console.log(passwordToCheck)
                    }
                    break;

                case 'Validation':
                    
                    break;
            }
            command = input[i]
            i++
        }

}
}
passwordValidator (['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
console.log('----------------------')
passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])