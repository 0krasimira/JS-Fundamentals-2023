function plantDiscovery(input) {

    let num = Number(input.shift())
    let obj = {}
    
    
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input[i].split('<->')
        rarity = Number(rarity)
        obj[plant] = {
            'plant': plant,
            'rarity': rarity,
            'rating': 0,
            'counter': 0
        }
    }

    for (let j = num; j < input.length; j++) {
        let line = input[j]
        
        if (line !== 'Exhibition') {
            let command = line.split(': ')
            let action = command.shift()
            
            
            command = command.toString().split(' - ')
            
            let plantT = command[0]
            
            

            if (obj.hasOwnProperty([plantT])){
            switch (action) {
                case 'Rate':
                    let t = Number(command[1])
                        obj[plantT]['rating'] += t
                        obj[plantT]['counter'] += 1
                        obj[plantT]['rating'] /= obj[plantT]['counter']
                    break;
            
                case 'Update':
                    
                let m = Number(command[1])    
                        obj[plantT]['rarity'] = m
                    
                    break;

                case 'Reset':
                    
                        obj[plantT]['rating'] = 0 
                    
                    break;
            } 
        } else {
            console.log('error')
        }
        
        
    }
    
}
    
console.log("Plants for the exhibition:")
for (let el of Object.entries(obj)) {
    // let avgRating = Number(obj[plantT]['rating']) / num
    
    console.log(`- ${el[0]}; Rarity: ${el[1]['rarity']}; Rating: ${(el[1]['rating']).toFixed(2)}`)
    
}
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
console.log('-------------')
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])