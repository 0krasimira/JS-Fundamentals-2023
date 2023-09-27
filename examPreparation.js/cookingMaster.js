function cookingMasterclass (data) {

    let budget = Number(data[0]);
    let students = Number(data[1]);
    let flourPrice = Number(data[2]);
    let singleEggPrice = Number(data[3]);
    let apronPrice = Number(data[4]);
    let eggsPrice = singleEggPrice * 10;
    let freePackages = 0
    
    
    let additionalApronsCount = Math.ceil(students * 0.2)

    if (students % 5 === 0) {
        freePackages = students / 5 
    }

    let price = flourPrice * (students - freePackages) + apronPrice * (students + additionalApronsCount) + eggsPrice * students

    if (price <= budget) {
        console.log(`Items purchased for ${price.toFixed(2)}$.`)
    } else {
        let moneyNeeded = price - budget
        console.log(`${moneyNeeded.toFixed(2)}$ more needed.`)
    }


  
}
cookingMasterclass ([40, 2, 1.0, 0.10, 10.0])