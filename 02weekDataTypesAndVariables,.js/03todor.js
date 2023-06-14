function rightPlace (string, char, final) {

    let firstStr = string.replace('_', char) 
    let result = (firstStr === final ? 'Matched' : 'Not Matched')
    console.log(result)

}

rightPlace ('Str_ng', 'i',
'String' )