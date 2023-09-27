function piccolo (input) {

    let set = new Set;

    for (const el of input) {
        let [direction, carNum] = el.split(', ')
        // console.log(carNum)
        
        if(direction === 'IN') {
            set.add(carNum)
        } else if(direction === 'OUT') {
            set.delete(carNum)
        }

        
    }

    if(set.size === 0) {
        console.log('Parking Lot is Empty')
    } else {
        let sorted = Array.from(set).sort()
        sorted.forEach(carNum => {console.log(carNum)
            
        });
    }

   
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)