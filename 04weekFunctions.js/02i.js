function addAndSubtract (n1, n2, n3) {

    function sum (n1, n2) {
        let firstAction = n1 + n2
        return firstAction
    }
    sum (n1, n2)

    let firstAction = sum(n1,n2);

    function subtract (firstAction, n3) {
       let finalNumber = firstAction - n3
       console.log(finalNumber)

    }
    subtract(firstAction, n3)

    
}

addAndSubtract (42, 58, 100)