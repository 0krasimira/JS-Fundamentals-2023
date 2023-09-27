function messageTranslator (arr) {
    let stringsCount = arr.shift()
    let buffer = ' '

    for (let line of arr) {
        let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1:\[(?<string>[A-Za-z]{8,})\]/gm
        let match = pattern.exec(line)
        
        if(match) {
            let pattern1 = /\[(?<string>\w{8,})]/gm
            let match1 = pattern1.exec(line)
            let pattern2 = /(?<command>[A-Z][a-z]+)/
            let command = pattern2.exec(line)
            match1 = match1.shift().split('')

            for (let el of match1) {
                if(el.charCodeAt(match1) >= 65 && el.charCodeAt(match1) <= 90 || el.charCodeAt(match1) >= 97 && el.charCodeAt(match1) <= 122) {
                    el = el.charCodeAt(el)
                    buffer += el + ' '
                }
                
            }
            console.log(`${command[0]}:${buffer}`)
        } else {
            console.log('The message is invalid')
        }
    } 

}


messageTranslator ((["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"]))
console.log('----------')
messageTranslator (["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"])