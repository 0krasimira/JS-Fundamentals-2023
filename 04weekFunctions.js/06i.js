function passwordValidator (curPas) {

    let isValid = true;
    let isValidLength = curPas.length < 6 || curPas.length > 10;

    if (isValidLength) {
        isValid = false
        console.log("Password must be between 6 and 10 characters")
    }

    let isOnlyLettersAndDigits = true;
    let digitsCount = 0;


    for (let i = 0; i < curPas.length; i++) {
        let curCode = curPas.charCodeAt(i)
        
        let isNotNumber = curCode < 48 || curCode > 57;
        let isNumber = curCode >= 48 && curCode <= 57;
        let isNotSmallLetter = curCode < 97 || curCode > 122;
        let isNotBigLetter = curCode < 65 || curCode > 90;

        if (isNumber) {
            digitsCount++
        }

        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValid = false;
            isOnlyLettersAndDigits = false;
        }
    }

    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits")
    }

    if (!(digitsCount >= 2)) {
        isValid = false
        console.log("Password must have at least 2 digits")
    }

    if (isValid) {
        console.log('Password is valid')
    }
}
passwordValidator ('logIn')