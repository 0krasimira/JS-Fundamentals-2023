function replacePassword (input) {

    let curPass = input.shift()
    let newPass = ''
    // console.log(curPass)

    for (const line of input) {
        if (line === 'Done') {
            break;
        }
        
        let command = line.split(', ')
        let action = command.shift().split(' ')

        switch (action[0]) {
            case 'TakeOdd':
                let length = curPass.length
                for (let i = 0; i < length; i++) {
                    if(i % 2 !== 0) {
                        newPass += curPass[i]
                        }
                    }
                    console.log(newPass)
                break;
        
         case 'Cut':
            let index = Number(action[1])
            let lengthToCut = Number(action[2])
       
            let textToRemove = newPass.substring(index, lengthToCut + index)
            newPass = newPass.replace(textToRemove, '')
            console.log(newPass)
            break;

        case 'Substitute':
            let substr = action[1];
            let substitute = action[2];
            let flag = true;
            let t = 0;
            while (flag) {
                if (!newPass.includes(substr)) {
                    if (t == 0) {
                        console.log("Nothing to replace!");
                        break;
                    }
                    flag = false;
                } else {
                    newPass = newPass.replace(substr, substitute);
                    t++;
                }
 
            }
            if (t !== 0) {
                console.log(newPass);
            }
        
                
            break;    
        }
    
        

}
console.log(`Your password is: ${newPass}`)
}
replacePassword ((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))
console.log('------------------')
replacePassword ((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
)

  
