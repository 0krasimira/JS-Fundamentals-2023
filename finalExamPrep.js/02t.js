function adAstra (input) {

    let text = input[0]
    let info = ''
    let totalCalories = 0
    let pattern = /(?<special>[|]|[#])(?<name>[A-Za-z\s]+)\1(?<expdate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm

    let match = pattern.exec(text)

    while (match) {
        let product = match.groups["name"]
        let expiryDate = match.groups["expdate"]
        let calories = Number(match.groups['calories'])
        totalCalories += calories
        info += `Item: ${product}, Best before: ${expiryDate}, Nutrition: ${calories}\n`
        match = pattern.exec(text)
    }

    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`)
    console.log(info)
        
}

adAstra (['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
console.log('-----')
adAstra ([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])