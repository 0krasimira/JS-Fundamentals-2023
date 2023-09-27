function googleSearches (input) {

        input = input.map(e => Number(e))
        let singleSearchIncome = input.shift()
        let numberOfUsers = input.shift()
        let total = 0
    
    
        for (let i = 0; i < numberOfUsers; i++){
            let searchesCount = input[i]
    
           let moneyFromAUser = searchesCount * singleSearchIncome
        
    
           if((i + 1) % 3 !== 0){
            if(searchesCount > 5){
                moneyFromAUser *=  2
            }
            }
            if(searchesCount == 1){
                moneyFromAUser = 0
            }
    
            if((i + 1) % 3 == 0){
                moneyFromAUser *= 3
                if(searchesCount > 5){
                    moneyFromAUser *=  2
                }
                if(searchesCount == 1){
                    moneyFromAUser = 0
                }
    
            }
    
            total += moneyFromAUser
    
        }
    
    console.log(`Total money earned: ${total.toFixed(2)}`)
    
    }


googleSearches (["5.5",
"3",
"1",
"10",
"5"])
console.log('------------')
googleSearches (["0.5",
"6",
"3",
"5",
"16",
"0",
"6",
"1"])
console.log('---------')
googleSearches (["3.0",
"7",
"0",
"1",
"2",
"3",
"4",
"6",
"15"])