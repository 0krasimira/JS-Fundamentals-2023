function loadingBar (number) {

let percentCount = number / 10;
let dotsCount = 10 - percentCount;

if (percentCount === 10) {
    console.log('100% Complete!');
} else {
    console.log(`${number}% [${'%'.repeat(percentCount)}${'.'.repeat(dotsCount)}]`);
    console.log('Still loading...');
}
}

loadingBar (50)