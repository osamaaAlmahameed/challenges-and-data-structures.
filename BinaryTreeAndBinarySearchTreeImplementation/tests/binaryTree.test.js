const BinaryTree = require('../src/binaryTree');
const TNode = require('../src/tnode');

describe('BinaryTree traversals', () => {
  let bt;
  beforeEach(() => {
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    root.left.right = new TNode(5);
    bt = new BinaryTree(root);
  });

  test('preOrder traversal', () => {
    expect(bt.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test('inOrder traversal', () => {
    expect(bt.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test('postOrder traversal', () => {
    expect(bt.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});
