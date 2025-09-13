const BinarySearchTree = require('../src/binarySearchTree');

describe('BinarySearchTree basic operations', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('adding nodes and contains', () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

  test('removing a node', () => {
    [10, 5, 15, 7].forEach((v) => bst.add(v));
    expect(bst.contains(5)).toBe(true);
    expect(bst.remove(5)).toBe(true);
    expect(bst.contains(5)).toBe(false);
  });

  test('remove root with two children', () => {
    [10, 5, 15, 12, 17].forEach((v) => bst.add(v));
    expect(bst.contains(10)).toBe(true);
    expect(bst.remove(10)).toBe(true);
    expect(bst.contains(10)).toBe(false);
  });
});
