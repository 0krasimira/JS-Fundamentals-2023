function companyUsers (input) {

    let companies = {}

    for (const line of input) {
        let [company, id] = line.split(' -> ')
        // console.log(id)
        if(!companies.hasOwnProperty(company)) {
            companies[company] = []
        }
        companies[company].push(id)
    }

    let sorted = Object.entries(companies)
    sorted.sort((a, b) => a[0].localeCompare(b[0]))

    for (const element of sorted) {
        let companyName = element[0];
        console.log(companyName)
        let set = new Set(element[1])
        for (const idNum of set) {
            console.log(` -- ${idNum}`)
        }
        
    }
    

}

companyUsers
(['SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'])