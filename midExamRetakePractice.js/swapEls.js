function arrayModifier (arr) {

    let arrayOfNumbers = arr.shift().split(' ').map(Number)
    let arrLength = arr.length;

    for(let index = 0; index < arrLength; index++) {
        let currentCommand = arr[index].split(' ');
        // let command = currentCommand.shift()
        // let indexOne = Number(currentCommand.shift())
        // let indexTwo = Number(currentCommand.shift())

        let [command, indexOne, indexTwo] = arr[index].split(' ')

        switch (command) {
            case 'swap':
                let temp = arrayOfNumbers[indexOne];
                arrayOfNumbers[indexOne] = arrayOfNumbers[indexTwo]
                arrayOfNumbers[indexTwo] = temp;
                break;
            case 'multiply':
                let result = arrayOfNumbers[indexOne] * arrayOfNumbers[indexTwo]
                arrayOfNumbers[indexOne] = result
                break;
            case 'decrease':
                arrayOfNumbers = arrayOfNumbers.map(x => x - 1)
                break;
            case 'end':
                break;

        }
    }

console.log(arrayOfNumbers.join(', '))
}
arrayModifier ([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
console.log('----------')
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])

