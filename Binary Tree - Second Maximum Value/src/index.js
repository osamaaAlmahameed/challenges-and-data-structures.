const BinaryTree = require('./binaryTree');
const TNode = require('./tnode');

const root = new TNode(10);
root.left = new TNode(5);
root.right = new TNode(20);
root.left.left = new TNode(3);
root.left.right = new TNode(7);
root.right.left = new TNode(15);
root.right.right = new TNode(25);

const tree = new BinaryTree(root);
console.log('Binary Tree:');
tree.print();

const secondMax = tree.findSecondMax();
console.log('Second Maximum Value:', secondMax); // Expected: 20
