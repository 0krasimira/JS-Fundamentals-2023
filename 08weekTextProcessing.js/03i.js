function extractFile (input) {

    let lastSlashIndex = input.lastIndexOf('\\')
    let lastDotIndex = input.lastIndexOf('.')

    

   let fileName = input.substring(lastSlashIndex + 1, lastDotIndex)
//    console.log(fileName)

   let extension = input.substring(lastDotIndex + 1, input.length)
//    console.log(extension)

   console.log(`File name: ${fileName}`)
   console.log(`File extension: ${extension}`)

}

extractFile ('C:\\Internal\\training-internal\\Template.pptx' )