function theFinalQuest (input) {

    let message =  input.shift().split(" ")

    let i = 0
    let command = input[i]
    i++

    while(command !== "Stop"){
        command = command.split(" ")
        let action = command[0]
        let word1 = command[1]
        let word2 = command[2]

        switch(action){
            case "Delete":
                let index = Number(word1) + 1
                if(index >=0 && index < message.length){
                message.splice(index, 1)
                }
                break;
            case "Swap":
                if(message.includes(word1) && message.includes(word2)){
                    let firstIndex = message.indexOf(word1)
                    let secondIndex = message.indexOf(word2)

                    message[firstIndex] = word2
                    message[secondIndex] = word1
                }
                break;
            case "Put":
                let ind = word2 - 1
                if(ind >= 0 && ind < message.length && ind !== message.length){
                    message.splice(ind , 0, word1)
                if(ind === message.length){
                    message.push(word1)
                }
                }
              
                break;
            case "Sort":
                message = message.sort().reverse()
                break;
            case "Replace":
                if(message.includes(word2)){
                    let indexx = message.indexOf(word2)
                    message[indexx] = word1
                }
                break;
        }


        command = input[i]
    i++

    }
   if(command === "Stop"){
    console.log(message.join(" "))
   }

}
theFinalQuest (["Please, follow the instructions!",
"Put You 0",
"Delete 3",
"Replace me you",
"Replace follow know",
"Stop"])