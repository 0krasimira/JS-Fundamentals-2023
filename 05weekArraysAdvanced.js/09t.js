function arrayManipulation(input) {

    let arr = input.shift().split(' ').map(Number);

  const actions = {
    Add: (num) => arr.push(num),
    Remove: (num) => (arr = arr.filter((el) => el !== num)),
    RemoveAt: (index) => arr.splice(index, 1),
    Insert: (num, index) => arr.splice(index, 0, num),
  };

  for (let i = 0; i < input.length; i++) {
    let [command, numOne, numTwo] = input[i].split(' ');
    actions[command](Number(numOne), Number(numTwo));
  }
  console.log(arr.join(' '));
}




arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)