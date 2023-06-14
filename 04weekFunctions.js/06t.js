function signCheck (numOne, numTwo, numThree) {


    let multiply = (a, b, c) => a * b * c;

    if(multiply(numOne, numTwo, numThree) < 0) { 
        console.log('Negative')
    } else {
        console.log('Positive')
    }

    }

signCheck (-5,
    1,
    1
    )