function guineaPig(input) {
    let food = Number(input[0]) * 1000
    let hay = Number(input[1]) * 1000
    let cover = Number(input[2]) * 1000
    let weight = Number(input[3]) * 1000
    let foorPerDay = 300



    for (let i = 1; i <= 30; i++) {
        food -= foorPerDay

        if (i % 2 === 0) {
            let hayUsed = food * 5 / 100
            hay -= hayUsed
        }
        if (i % 3 === 0) {
            cover -= weight / 3
        }

    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log(`Merry must go to the pet store!`)
        return;
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
    }

}

guineaPig(["10",
    "5",
    "5.2",
    "1"])
console.log('------------')
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])
console.log('--------')
guineaPig(["9",
    "5",
    "5.2",
    "1"])