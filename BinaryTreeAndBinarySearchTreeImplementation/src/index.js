const BinaryTree = require('./binaryTree');
const BinarySearchTree = require('./binarySearchTree');
const TNode = require('./tnode');

function demoBinaryTree() {
  console.log('--- BinaryTree Demo ---');
  const root = new TNode('A');
  root.left = new TNode('B');
  root.right = new TNode('C');
  root.left.left = new TNode('D');
  root.left.right = new TNode('E');
  root.right.right = new TNode('F');

  const bt = new BinaryTree(root);

  console.log('\nPrint tree:');
  bt.print();

  console.log('\nPreOrder:', bt.preOrder().join(', '));
  console.log('InOrder :', bt.inOrder().join(', '));
  console.log('PostOrder:', bt.postOrder().join(', '));
}

function demoBST() {
  console.log('\n--- BinarySearchTree Demo ---');
  const bst = new BinarySearchTree();
  [10, 5, 15, 7, 3, 12].forEach((v) => bst.add(v));

  console.log('Contains 7:', bst.contains(7));
  console.log('Contains 99:', bst.contains(99));

  console.log('Remove 5:', bst.remove(5));
  console.log('Contains 5 after remove:', bst.contains(5));

  console.log('Remove 10 (root with two children):', bst.remove(10));
  console.log('Contains 10 after remove:', bst.contains(10));
}

demoBinaryTree();
demoBST();
