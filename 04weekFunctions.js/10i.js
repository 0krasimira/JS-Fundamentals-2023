function factorialDivision (num1, num2) {

    function factorial (num) {

        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }

    }

    let firstNumFactorial = factorial(num1);
    let secondNumFactorial = factorial(num2);
    let result = firstNumFactorial / secondNumFactorial;
    console.log(result.toFixed(2))
}
   



factorialDivision (5, 2)