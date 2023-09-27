function inventory (array) {

    let myHeroes = []

    for (const line of array) {
        let [name, level, item] = line.split(' / ')

        let hero = {
            name : name, 
            level: Number(level), 
            item : item
        }
        myHeroes.push(hero)
    }

    myHeroes.sort((a, b) => a.level - b.level)

    for (const hero of myHeroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.item}`)
    }
    

}

inventory ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])