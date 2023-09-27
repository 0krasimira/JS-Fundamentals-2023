function schoolGrades(input) {

    let schoolBook = new Map();
  
    for (const el of input) {
      let studentGrade = el.split(' ')
      let studentName = studentGrade.shift()
      
      if(!schoolBook.has(studentName)) {
        schoolBook.set(studentName, studentGrade)
      } else {
        let updatedGrade = schoolBook.get(studentName)
        for (let grade of studentGrade) {
          updatedGrade.push(grade);
        }
        schoolBook.set(studentName, updatedGrade)
      }
    }

    let sorted = Array.from(schoolBook).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });

    for (const [name, grade] of sorted) {
      let sumGrade = 0;
      for (currentGrade of grade) {
      sumGrade += Number(currentGrade);
    }
    let avg = sumGrade / grade.length;
    console.log(`${name}: ${avg.toFixed(2)}`);
  }
}
  
  

schoolGrades (['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])