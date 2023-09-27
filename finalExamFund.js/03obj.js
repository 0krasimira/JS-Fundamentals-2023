function degustationParty (arr) {

    let myGuest = {}
    for (let i = 0; i < arr.length; i++) {
        
        // console.log(command) // Like-Krisi-shrimps
        let [action, person, meal] = arr.shift().split('-')
        
        myGuest[action] = {
            person,
            meal,
            disliked: 0
        };
    }

        let command = arr.shift().split('-');
        console.log(command) // ['Dislike', 'Krisi', 'salad']
        
        if (myGuest.hasOwnProperty(command[1])) {
            if (command == 'Like') {
                myGuest[meal] = meal, command[2]
        } 
        //     Array.from(myGuest).push(person)
           
        // }
        
    
        }


console.table(myGuest)
}
degustationParty (["Like-Krisi-shrimps", 
"Like-Krisi-soup", 
"Like-Penelope-dessert", 
"Like-Misho-salad", 
"Stop"])
console.log('------------')
degustationParty(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])

