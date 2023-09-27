function movingTarget (data) {

let stringTargets = data.shift().split(' ')
let targets = stringTargets.map(x => Number(x))
// console.log(targets)

let index = 0;
let command = data[index]
index++

while(command !== 'End') {
    let tokens = command.split(' ')
    // console.log(tokens)
    let elementIndex = Number(tokens[1]);
    switch (tokens[0]) {
        case 'Shoot':
            if(elementIndex >= 0 && elementIndex < targets.length){
                let power = Number(tokens[2])
                targets[elementIndex] -=  power
                if (targets[elementIndex] <= 0) {
                    targets.splice(elementIndex, 1)
                }
            }
            break;
        case 'Add': 
        let value = Number(tokens[2])
            if (elementIndex >= 0 && elementIndex < targets.length) {
                targets.splice(elementIndex, 0, value)
            } else {
                console.log('Invalid placement!')
            }
        break;
        case 'Strike': 
        let radius = Number(tokens[2])
        if (elementIndex - radius >= 0 && radius + elementIndex < targets.length) {
            targets.splice(elementIndex - radius, radius * 2 + 1)
        } else {
            console.log('Strike missed!')
        }
        break;
        
    }
    // let action
    // if (curCommand.indexOf(action) > -1) {
    //     action = curCommand.split(' ')
    //     console.log(action)

    command = data[index]
index++

}

console.log(targets.join("|"))
}
movingTarget ((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
)