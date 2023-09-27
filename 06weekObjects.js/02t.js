function city (obj) {

    
   for (let key of Object.keys(obj)) {
    console.log(`${key} -> ${obj[key]}`)
   }

}

city ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   })

   console.log('--------------------------')

city ({name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
   })