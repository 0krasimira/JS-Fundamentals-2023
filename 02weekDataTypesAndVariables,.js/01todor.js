function echoType (text) {
 console.log(typeof text)
 if (typeof text === 'string') {
    console.log(`${text}`)
 } else if (typeof text === 'number') {
    console.log(`${text}`)
 } else {
    console.log("Parameter is not suitable for printing")
 }
 

}

echoType (null) 
