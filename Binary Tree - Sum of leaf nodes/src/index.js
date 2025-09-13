const BinaryTree = require('./binaryTree');
const TNode = require('./tnode');

const root = new TNode(9);
root.left = new TNode(8);
root.right = new TNode(12);
root.left.left = new TNode(3);
root.left.right = new TNode(7);
root.right.left = new TNode(17);
root.right.right = new TNode(23);
root.left.left.right = new TNode(4);

const tree = new BinaryTree(root);
console.log('Binary Tree:');
tree.print();

const sum = tree.leafSum();
console.log('Sum of Leaf Nodes:', sum); // Expected: 51
