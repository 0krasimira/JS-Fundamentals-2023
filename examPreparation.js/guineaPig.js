function guineaPig (input) {

let foodGr = Number(input[0]) * 1000
let hayGr = Number(input[1]) * 1000
let coverGr = Number(input[2]) * 1000
let weightGr = Number(input[3]) * 1000
let days = 1;

while (days <= 30) {

    foodGr -= 300

    if (days % 2 === 0) {
        hayGr -= (foodGr * 5) / 100
    }

    if (days % 3 === 0) {
        coverGr -= weightGr * 0.3333
    }

    

    days++
}

if (foodGr < 0 || hayGr < 0 || coverGr < 0) {
    return ("Merry must go to the pet store!")
} else {
    let foodKg = Number(foodGr / 1000)
    let hayKg = Number(hayGr / 1000)
    let coverKg = Number(coverGr / 1000)
    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
}

}

guineaPig (["10", 
"5", 
"5.2", 
"1"])