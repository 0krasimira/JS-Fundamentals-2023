function worldTour (input) {
    

    let stops = input.shift() // Hawai::Cyprys-Greece - string
    
    
    let command = input.shift()  // Add Stop:7:Rome

    
    while (command !== 'Travel') {
    let actions = command.split(':')  // ['Add Stop', '7', 'Rome']
    
    
    switch (actions[0]) {  // Add Stop
        case 'Add Stop':
            let token1 = Number(actions[1])
            if (token1 >= 0 && token1 <= stops.length) {
                let added = actions[2]
                let firstPart = stops.substring(0, token1) 
                let secondPart = stops.substring(token1, stops.length)
                stops = firstPart + added + secondPart
            }
            console.log(stops)
            break;   /// DONE  Hawai::RomeCyprys-Greece
    
        case 'Remove Stop':
            let index1 = Number(actions[1])
            let index2 = Number(actions[2])
            if (index1 >= 0 && index1 < stops.length && index2 >= 0 && index2 < stops.length) {
                let toRemove = stops.substring(index1, index2 + 1) // Cyprys
                stops = stops.replace(toRemove, '')
            }
            console.log(stops)
            break;

        case 'Switch':
            if (stops.includes(actions[1])) {
              stops = stops.replace(actions[1], actions[2])  
              
            }
            console.log(stops)

            break;        
    }


    command = input.shift()
    }

    if (command == 'Travel') {
        console.log(`Ready for world tour! Planned stops: ${stops}`)
    }

}

worldTour (["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
console.log('----------------')
worldTour (["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])