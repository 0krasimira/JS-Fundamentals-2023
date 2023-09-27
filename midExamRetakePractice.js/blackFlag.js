function blackFlag(arr) {



let days = Number(arr[0])
let dailyPlunder = Number(arr[1])
let expectedPlunder = Number(arr[2])
let totalPlunder = 0


for (let i = 1; i <= days; i++) {
  let curDay = Number(i)
  totalPlunder += dailyPlunder

  if (curDay % 3 === 0) {
    totalPlunder += dailyPlunder * 0.5
  } 
  if (curDay % 5 === 0) {
    totalPlunder -= totalPlunder * 0.3
  }
  
  
}


if (totalPlunder >= expectedPlunder) {
  console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
} else {
  let percentage = (totalPlunder * 100 ) / expectedPlunder
  console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
}

}

blackFlag([
  "10",
    "20",
    "380"
])
console.log('------------')
blackFlag([
  "5",
    "40",
    "100"
])