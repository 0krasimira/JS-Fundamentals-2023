function pirates (input) {

    let obj = {}
    let i = 0;
    let command = input[i]
    i++
    let overallTowns = 0
    

while(command !== 'Sail') {
    
    let [city, population, gold] = command.split("||")
    population = Number(population)
    gold = Number(gold)
   
    if (!obj.hasOwnProperty(city)) {
        overallTowns++
        obj[city] = {
            'city': city,
            'population': population,
            'gold': gold
        }
    } else {
        
        obj[city]['population'] += population
        obj[city]['gold'] += gold
    }

    if (command === 'Sail') {
        break;
    }
    command = input[i]
    i++
}

for (let j = overallTowns + 1; j < input.length; j++) {
    let command2 = input[j]
    let [action, town, t1, t2] = command2.split('=>')
        t1 = Number(t1)
        t2 = Number(t2)
    
    if (command2 !== 'End') {
        
       // console.log(t2) // 380 , undefined
        switch (action) {
            case 'Plunder':
                obj[town]['population'] -= t1
                obj[town]['gold'] -= t2
                console.log(`${town} plundered! ${t2} gold stolen, ${t1} citizens killed.`)
                
                if (obj[town]['population'] === 0 || obj[town]['gold'] === 0) {
                    
                    console.log(`${town} has been wiped off the map!`)
                    delete obj[town]
                    
                    overallTowns--
                }
                break;
        
            case 'Prosper':

            if (t1 < 0) {
                console.log(`Gold added cannot be a negative number!`)
                continue;
            } else {
                obj[town]['gold'] += t1
                console.log(`${t1} gold added to the city treasury. ${town} now has ${obj[town]['gold']} gold.`)
                break;
        }
    }
        
            
} else {  
    if (overallTowns > 0) {
        console.log(`Ahoy, Captain! There are ${overallTowns} wealthy settlements to go to:`)
        for (let el of Object.entries(obj)) {
        console.log(`${el[0]} -> Population: ${el[1]['population']} citizens, Gold: ${el[1]['gold']} kg`)   
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')

    }
        
    }

}



}

pirates (["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
console.log('-------')
pirates (["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])