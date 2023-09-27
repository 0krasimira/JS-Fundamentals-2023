function shootForTheWin(info) {
    let arr = info.shift().split(" ").map(e => Number(e))
    let count = 0

    let i = 0
    let command = info[i]
    i++

    while (command !== "End") {
        let index = Number(command)
        for (let j = 0; j < arr.length; j++) {
            if (index >= 0 && index < arr.length) {
                let numberToShoot = arr[index]
                arr[index] = -1
                count++
                for (let el = 0; el < arr.length; el++) {
                    let curNum = arr[el]
                    if (curNum !== -1) {
                        if (curNum > numberToShoot) {
                            curNum -= numberToShoot
                            arr[el] = curNum
                        } else if (curNum <= numberToShoot) {
                            curNum += numberToShoot
                            arr[el] = curNum
                        }
                    }
                }
            }
            break
        }

        command = info[i]
        i++
    }

    if (command === "End") {
        console.log(`Shot targets: ${count} -> ${arr.join(" ")}`)
    }

}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
console.log('---------------')
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])