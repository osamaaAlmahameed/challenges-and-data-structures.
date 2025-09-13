const BinaryTree = require('../src/binaryTree');
const TNode = require('../src/tnode');

describe('BinaryTree leafSum', () => {
  test('Example tree', () => {
    const root = new TNode(9);
    root.left = new TNode(8);
    root.right = new TNode(12);
    root.left.left = new TNode(3);
    root.left.right = new TNode(7);
    root.right.left = new TNode(17);
    root.right.right = new TNode(23);
    root.left.left.right = new TNode(4);

    const tree = new BinaryTree(root);
    expect(tree.leafSum()).toBe(51);
  });

  test('Tree with negative leaf nodes', () => {
    const root = new TNode(10);
    root.left = new TNode(-5);
    root.right = new TNode(15);
    root.left.left = new TNode(-10);
    root.left.right = new TNode(-20);
    root.right.left = new TNode(5);

    const tree = new BinaryTree(root);
    expect(tree.leafSum()).toBe(-25); // -10 + -20 + 5
  });

  test('Single node tree', () => {
    const tree = new BinaryTree(new TNode(42));
    expect(tree.leafSum()).toBe(42);
  });

  test('Empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.leafSum()).toBe(0);
  });
});
