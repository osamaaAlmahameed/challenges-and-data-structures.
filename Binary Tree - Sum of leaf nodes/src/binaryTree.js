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

  leafSum() {
    if (!this.root) return 0;

    let sum = 0;

    function traverse(node) {
      if (!node) return;
      if (!node.left && !node.right) {
        sum += node.data; // leaf node
      }
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
    return sum;
  }
}

module.exports = BinaryTree;
