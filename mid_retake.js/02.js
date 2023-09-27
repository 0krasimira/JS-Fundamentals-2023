function jeweler (input) {

        let whiteGold = input.shift().split(" ")
        let yellowGold = input.shift().split(" ")
     
        let pairs = 0
        let leftover = 0
    
        let whiteGoldlength = whiteGold.length
        let yellowGoldlength = yellowGold.length
        
    
    
        for (let i = 0; i < whiteGoldlength; i++) {
            let whiteEl = Number(whiteGold[i])
    
            for(let j = 0; j < yellowGoldlength; j++){
                let yellowEl = Number(yellowGold[j])
            
            let sum = whiteEl + yellowEl
    
            if(sum == 10)
            pairs++
    
            if(sum > 10){
                while(sum >= 10){
               yellowEl -=2
               sum = whiteEl + yellowEl
               if(sum == 10){
               pairs++
               break
               }
                }
               
            }
    
            if(sum < 10){
                leftover += sum
            }
    
       break 
    }
        }
    
        if(leftover > 10){
            let earrings = Math.floor(leftover / 10)
            let total = pairs + earrings
            if(total >= 7){
                console.log(`Great success, you created ${total} earrings.`)
            } else{
                let difference = 7 - total
                console.log(`Keep trying, you need ${difference} more earrings.`)
            }
        } else{
            console.log(`Great success, you created ${pairs} earrings.`)
        
        }
       
    }

jeweler(['2 7 8 5 1 6 1 7 5',
    '8 3 2 7 9 4 9 2 3'])
console.log('-----------')
jeweler(['5 3 2 2 4',
    '5 5 8 2 6'])