const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

const stack = new StackWithDeleteMiddle();
stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);
stack.print();

stack.deleteMiddle();
stack.print();

stack.push(2);
stack.push(9);
stack.push(11);
stack.print();

stack.deleteMiddle();
stack.print();
