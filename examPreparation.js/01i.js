function softuniReception (input) {

    let employeeOne = Number(input.shift())
    let employeeTwo = Number(input.shift())
    let employeeThree = Number(input.shift())
    let totalStudents = Number(input.shift())
    let totalStudentsPerHour = employeeOne + employeeTwo + employeeThree
    let neededHours = 0;

    while(totalStudents > 0) {
        neededHours++
        totalStudents -= totalStudentsPerHour

        if(neededHours % 4 === 0) {
            neededHours++
        }
    }
    console.log(`Time needed: ${neededHours}h.`)
}



softuniReception (['1','2','3','45'])