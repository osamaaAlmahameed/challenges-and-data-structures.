const { LinkedList } = require('./rotateLinkedList');

const list = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(n => list.append(n));

console.log("Before rotation:");
console.log(list.display());

list.rotateLeft(2);

console.log("After rotating left by 2:");
console.log(list.display());
