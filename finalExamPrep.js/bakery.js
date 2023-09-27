function bakery (input) {

    let obj = {}

    for (let i = 0; i < input.length; i++) {
        let line = input[i] // ['Receive', '105', 'cookies']
        
        while (line !== 'Complete!') {
            console.log(line)

            line = input[i]
            i++
        }
}
} 

bakery (["Receive 105 cookies",
"Receive 10 donuts",
"Sell 10 donuts",
"Sell 1 bread",
"Complete"])

console.log('-------')

bakery (["Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"])