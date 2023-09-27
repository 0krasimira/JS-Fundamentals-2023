function blackFlag (data) {

    let days = Number(data[0]) 
    let dailyPlunder = Number(data[1])
    let plunderTarget = Number(data[2])

    let totalPlunder = 0;

    for (i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;
        } 
        
        if (i % 5 === 0) {
            totalPlunder *= 0.70
        }

    }


    if (totalPlunder >= plunderTarget) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        let percentage = totalPlunder / plunderTarget * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }

}

blackFlag (["10",
"20",
"380"])
