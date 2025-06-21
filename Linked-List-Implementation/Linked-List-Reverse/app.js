const { LinkedList } = require('./reverse/reverse');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log('without reverse:', list.toArray());

list.reverse();

console.log('with reverse:', list.toArray());
