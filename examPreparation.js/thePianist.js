function thePianist(input) {

    let piecesNum = Number(input.shift())

    let obj = {}

    for (let k = 0; k < piecesNum; k++) {
        let line = input[k]
        let [piece, composer, key] = line.split('|')

        obj[piece] = {
            piece,
            composer,
            key
        }
    }

    for (let i = piecesNum; i < input.length; i++) {
        let command = input[i]

        let [action, curPiece, curComposer, curKey] = command.split("|")

        if (action !== 'Stop') {
            switch (action) {
                case 'Add':
                    if (!obj.hasOwnProperty(curPiece)) {
                        obj[curPiece] = {
                            'piece': curPiece,
                            'composer': curComposer,
                            'key': curKey
                        }
                        console.log(`${curPiece} by ${curComposer} in ${curKey} added to the collection!`)
                    } else {
                        console.log(`${curPiece} is already in the collection!`)
                    }
                    break;

                case 'Remove':
                    if (obj.hasOwnProperty(curPiece)) {
                        delete obj[curPiece]
                        console.log(`Successfully removed ${curPiece}!`)
                    } else {
                        console.log(`Invalid operation! ${curPiece} does not exist in the collection.`)
                    }
                    break;

                case 'ChangeKey':
                    if (obj.hasOwnProperty(curPiece)) {
                        obj[curPiece]['key'] = curComposer //// ?????
                        console.log(`Changed the key of ${curPiece} to ${curComposer
                        }!`)
                    } else {
                        console.log(`Invalid operation! ${curPiece} does not exist in the collection.`)
                    }
                    break;
            }
        } else {
            for (let el of Object.entries(obj)) {
                console.log(`${el[0]} -> Composer: ${el[1]['composer']}, Key: ${el[1]['key']}`)
            }

        }

    }
    

}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
console.log('-------------')
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])