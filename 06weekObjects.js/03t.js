function convertToObject (input) {

let person = JSON.parse(input)

for (const key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`)
}

}

convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}')