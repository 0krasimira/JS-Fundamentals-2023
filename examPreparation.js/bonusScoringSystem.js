function bonusScoringSystem (input) {

    let myInfo = input.toString().split(',')
    // console.log(myInfo)

    let students = myInfo.shift()
    // console.log(students)
    let lectures = myInfo.shift()
    // console.log(lectures)
    let additionalBonus = myInfo.shift()
    // console.log(additionalBonus)

    let attendences = myInfo
    // console.log(attendences)
    let attendencesLength = attendences.length
    let bonusesAsArr = []
    

    for (let i = 0; i < attendencesLength; i++) {
        let curStudentAttendance = Number(attendences[i])
        // console.log(curStudentAttendance)
        let curStudentBonus = Number(curStudentAttendance) / Number(lectures) * (5 + Number(additionalBonus))
        bonusesAsArr.push(curStudentBonus)
        
    }

    attendences.sort((a, b) => b - a)
        let neededAttendance = attendences.splice(0, 1)

    bonusesAsArr.sort((a, b) => b - a)
         let highest = bonusesAsArr.splice(0, 1)
    // console.log(highest)

    

    console.log(`Max Bonus: ${Math.ceil(highest)}.`)
    console.log(`The student has attended ${Math.ceil(neededAttendance)} lectures.`)
    
    
}

bonusScoringSystem ([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])