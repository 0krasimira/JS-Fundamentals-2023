function ages(input) {

let age = Number(input);
let type = '';

if (age >= 0 && age <= 2) {
    type = 'baby';
} else if (age >= 2 && age <= 13) {
    type = 'child';
} else if (age > 13 && age <= 19) {
    type = 'teenager';
} else if (age > 19 && age <= 65) {
    type = 'adult';
} else if (age > 65) {
    type = 'elder';
} else {
    type = 'out of bounds';
}

console.log(type);

}

ages ("200")