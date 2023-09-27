function heroesOfCodeAndLogic(input) {

    let num = Number(input.shift())

    let obj = {}

    for (let i = 0; i < num; i++) {

        let [name, hp, mp] = input[i].split(' ')
        hp = Number(hp)
        mp = Number(mp)

        obj[name] = {
            name,
            hp,
            mp
        }
        // console.table(obj)
    }

    for (let j = num; j < input.length; j++) {
        let line = input[j]
        
        if (line !== 'End') {
            let [action, curHero, t1, t2] = line.split(' - ')

            switch (action) {
                case 'CastSpell':

                    let mpNeeded = Number(t1) // 15
                    let spellName = t2 // ViewEarth
                    if (obj[curHero]['mp'] > mpNeeded) {
                        let difference = obj[curHero]['mp'] - mpNeeded
                        obj[curHero]['mp'] -= mpNeeded
                        console.log(`${curHero} has successfully cast ${spellName} and now has ${difference} MP!`)
                    } else {
                        console.log(`${curHero} does not have enough MP to cast ${spellName}!`)
                    }
                    break;

                case 'TakeDamage':
                    let curHp = Number(t1)
                    let attacker = t2
                    obj[curHero]['hp'] -= curHp
                    if (obj[curHero]['hp'] > 0) {
                        console.log(`${curHero} was hit for ${curHp} HP by ${attacker} and now has ${obj[curHero]['hp']} HP left!`)
                    } else {
                        console.log(`${curHero} has been killed by ${attacker}!`)
                        delete obj[curHero]
                    }
                    break;

                case 'Recharge':
                    
                    if (obj[curHero]['mp'] > 200) {
                        obj[curHero]['mp'] = 200
                        break;
                     } else {
                        let amount = Number(t1)
                        if (obj[curHero]['mp'] + amount >= 200) {
                        let recharge = 200 - obj[curHero]['mp']
                        console.log(`${curHero} recharged for ${recharge} MP!`)
                        obj[curHero]['mp'] = 200
                    } else {
                        obj[curHero]['mp'] += amount
                        console.log(`${curHero} recharged for ${amount} MP!`)
                    }
                    }
                    break;

                case 'Heal':
                    if (obj[curHero]['hp'] > 100) {
                        obj[curHero]['hp'] = 100
                        break;
                    } else {
                    let amountHp = Number(t1)
                    if (obj[curHero]['hp'] + amountHp >= 100) {
                        let diff = 100 - obj[curHero]['hp']
                        obj[curHero]['hp'] = 100
                        console.log(`${curHero} healed for ${diff} HP!`)
                    } else {
                        obj[curHero]['hp'] += amountHp
                        console.log(`${curHero} healed for ${amountHp} HP!`)
                    }
                    }
                    break;
            }
        } else {
            for (let el of Object.entries(obj)) {
                console.log(`${el[0]}
                    HP: ${el[1]['hp']}
                    MP: ${el[1]['mp']}`)
                
            }
        } 
            
        
    }

}

heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])

console.log('--------')

heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])