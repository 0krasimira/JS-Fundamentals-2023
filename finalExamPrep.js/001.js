function worriorsQuest(input){

    let message = input.shift()
   
    let i = 0
    let command = input[i]
    i++

    while(command !== "For Azeroth"){
        command = command.split(" ")
        let action = command[0]
       

        switch(action){
            case "GladiatorStance":
         message = message.toUpperCase()  
         console.log(message)
                break;
            case "DefensiveStance":
                message = message.toLowerCase()
                console.log(message)
                break;
            case "Dispel":
                let w1 = command[1]
                let w2 = command[2]
                let index = Number(w1)
                if(index >= 0 && index < message.length){
                    message = message.replace(message[index], w2)
                    console.log("Success!")
                } else{
                    console.log("Dispel too weak.")
                }
                break;
            case "Target":
                let action1 = command[1]
                let w11 = command[2]
                let w22 = command[3]

                if(action1 == "Change"){
               if(message.includes(w11)){
                for (let el of message) {
                    if(el === w11){
                        message = message.replace(w11, w22)
                    } 
                }
                console.log(message)
               } else{
                console.log(message)
               }
                } else if(action1 == "Remove"){
                    if(message.includes(w11)){
                        for (let el of message) {
                            if(el === w11){
                                message = message.replace(w11, "")
                            } 
                        }
                        console.log(message)
                       } else{
                        console.log(message)
                       }
                        } 
               
                break;
            default:
                console.log("Command doesn't exist!")

        }


        command = input[i]
        i++
    }

}

worriorsQuest (["fr1c710n",
"GladiatorStance",
"Dispel 2 I",
"Dispel 4 T",
"Target Change RICTION riction",
"For Azeroth"])