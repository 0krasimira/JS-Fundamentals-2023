function meetings (input) {

    let myInfo = {}

    for (const el of input) {
        let [day, person] = el.split(' ')
        
        if(myInfo.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            myInfo[day] = person
        console.log(`Scheduled for ${day}`) 
    }

}

for (const [key, value] of Object.entries(myInfo)) {
    console.log(`${key} -> ${[value]}`)
    
}
}



meetings (['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)