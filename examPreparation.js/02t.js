function shoppingList (data) {

    let list = data.shift().split("!")
    

    let i = 0;
    let command = data[i];
    i++;

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ')
        let item;
        // console.log(tokens)
        switch (tokens[0]) {
            case 'Urgent': 
            item = tokens[1]
            if(list.indexOf(item) == -1) {
                list.unshift(item)
            }
            break;
            case 'Unnecessary':
            item = tokens[1]
            if (list.indexOf(item) > -1) {
                list.splice(list.indexOf(item),1)
            } 
            break;
            case 'Correct':
                let oldItem = tokens[1]
                let newItem = tokens[2]
                let indexOfElement = list.indexOf(oldItem)
                if (indexOfElement > -1) {
                    list[indexOfElement] = newItem
                }
            break;
            case 'Rearrange': 
                item = tokens[1]
                if (list.indexOf(item) > -1) {
                    let currentItem = list.splice(list.indexOf(item), 1)
                    list.push(currentItem[0])
                }
            break;
        
        }
        command = data[i];
        i++;
    }
    console.log(list.join(', '))
}




shoppingList ((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]))