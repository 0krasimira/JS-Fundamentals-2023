function mirrorWords (input) {

    let text = input[0]
    let pattern =  /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm

    let matches = [...text.matchAll(pattern)]
    let mirroredWords = []

    for (const el of matches) {
        let word1 = el[2]
        let word2 = el[3]
        let reverseWord = word2.split('').reverse().join('')
        if(word1 === reverseWord) {
            mirroredWords.push(word1 + " <=> " + word2)
        }
    }
    
        
    if(matches.length===0){
        console.log('No word pairs found!')
        console.log('No mirror words!')
    }else{
        console.log(`${matches.length} word pairs found!`)
        if(mirroredWords.length===0){
            console.log('No mirror words!')
        }else{
            console.log('The mirror words are:')
            console.log(mirroredWords.join(', '))
        }
    }
}



mirrorWords ([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])
console.log('----------')
mirrorWords ([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])    