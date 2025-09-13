const TNode = require('./tnode');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  print() {
    function printNode(node, prefix = '', isLeft = true) {
      if (!node) return;
      console.log(prefix + (isLeft ? '├─ ' : '└─ ') + node.data);
      const childPrefix = prefix + (isLeft ? '│  ' : '   ');
      if (node.left) printNode(node.left, childPrefix, true);
      if (node.right) printNode(node.right, childPrefix, false);
    }
    if (!this.root) {
      console.log('(empty tree)');
      return;
    }
    console.log(this.root.data);
    if (this.root.left) printNode(this.root.left, '', true);
    if (this.root.right) printNode(this.root.right, '', false);
  }

  findSecondMax() {
    if (!this.root) return null;

    let max = -Infinity;
    let secondMax = -Infinity;

    function traverse(node) {
      if (!node) return;
      if (node.data > max) {
        secondMax = max;
        max = node.data;
      } else if (node.data > secondMax && node.data < max) {
        secondMax = node.data;
      }
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return secondMax === -Infinity ? null : secondMax;
  }
}

module.exports = BinaryTree;
