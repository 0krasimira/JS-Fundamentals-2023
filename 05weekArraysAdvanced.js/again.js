// function sumFirstAndLast (arr) {
    
//     console.log(Number(arr.slice(0,1)) + Number(arr.slice(-1)))
    
// }

// sumFirstAndLast (['20', '30', '40'] )




// function negativeOrPositiveNumbers (arr) {

//     let result = []

//     for(let el of arr) {
//         if (el < 0) {
//             result.unshift(el)
//         } else {
//             result.push(el)
//         }
        
//     }
    
//     console.log(result.join(' \n'))
    
// }

// negativeOrPositiveNumbers (['7', '-2', '8', '9'])


function firstAndLastKNumbers (arr) {

    let slicor = Number(arr[0])
    console.log(slicor)

    let arrLength = Number(arr.length)
    

    
let firstArr = arr.slice(1, slicor + 1)
console.log(firstArr)

let secondArr = arr.slice(Number(arr.length - slicor));
console.log(secondArr)


}

firstAndLastKNumbers
 ([3,
    6, 7, 8, 9])