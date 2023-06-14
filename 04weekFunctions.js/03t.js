function repeatString (str, n) {

    let result = ''
 for (let i = 1; i <= n; i++) {
    result = str.repeat(n)
 }
    console.log(result)

}

repeatString ("Krasi", 8)