function pascalCaseSplitter (string) {

    let word = string.split(/(?=[A-Z])/)
    console.log(word.join(', '))


}

pascalCaseSplitter ('SplitMeIfYouCanHaHaYouCantOrYouCan')