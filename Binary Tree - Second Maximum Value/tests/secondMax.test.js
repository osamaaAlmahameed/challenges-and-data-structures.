const BinaryTree = require('../src/binaryTree');
const TNode = require('../src/tnode');

describe('BinaryTree findSecondMax', () => {
  test('Example tree', () => {
    const root = new TNode(10);
    root.left = new TNode(5);
    root.right = new TNode(20);
    root.left.left = new TNode(3);
    root.left.right = new TNode(7);
    root.right.left = new TNode(15);
    root.right.right = new TNode(25);

    const tree = new BinaryTree(root);
    expect(tree.findSecondMax()).toBe(20);
  });

  test('Single node', () => {
    const tree = new BinaryTree(new TNode(10));
    expect(tree.findSecondMax()).toBeNull();
  });

  test('Negative values', () => {
    const root = new TNode(-10);
    root.left = new TNode(-20);
    root.right = new TNode(-5);
    const tree = new BinaryTree(root);
    expect(tree.findSecondMax()).toBe(-10);
  });
});
