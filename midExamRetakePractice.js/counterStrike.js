function counterstrike(info) {
    let count = 0;
    let initialEnergy = Number(info.shift());
    for (const commands of info) {
        if (commands !== 'End of battle') {
            let energy = Number(commands);
            if (initialEnergy - energy < 0) {
                console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`);
                return;
            }
            initialEnergy -= energy;
            count++;
        } else {
            console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`);
        }
        if (count % 3 === 0) {
            initialEnergy += count;
        }
    }
}


counterstrike (["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
console.log('-------------------')
counterstrike (["200",
"54",
"14",
"28",
"13",
"End of battle"])