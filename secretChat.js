function secretChat(arr) {

    let messageToChange = arr.shift().split(', ').toString()
    

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]

        while (command !== 'Reveal') {
            

            let tokens = command.split(':|:')
            let action = tokens.shift()
            

            switch (action) {
                case 'InsertSpace':
                    let index = Number(tokens) //tokens = ['5']; Number(tokens) = 5
                    let firstPart = messageToChange.substring(index, 0)
                    let secondPart = messageToChange.substring(index, messageToChange.length)
                    messageToChange = firstPart + ' ' + secondPart
                    console.log(messageToChange)
                    break;

                case 'Reverse':
                    let substring = tokens.toString()
                    let counter = 0
                    if (messageToChange.includes(substring)) {
                        counter++
                        let updatedSubstring = substring.split("").reverse().join("")
                        if(counter >= 2) {
                            for (const el of messageToChange) {
                            messageToChange = messageToChange.replace(substring, updatedSubstring)
                        }
                    } else if (counter = 1) {
                        messageToChange = messageToChange.replace(substring, updatedSubstring)
                        }
                        console.log(messageToChange)
                    } else {
                        console.log('error')
                    }
                    break;

                case 'ChangeAll':
                    let strToReplace = tokens[0]
                    let replacementStr = tokens[1]
                    for (const el of messageToChange) {
                    messageToChange = messageToChange.replace(strToReplace, replacementStr);
                    }
                    console.log(messageToChange)
                    break;
            }
            command = arr[i]
            i++
        }
    }

    console.log(`You have a new text message: ${messageToChange}`)
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])