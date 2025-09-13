const TNode = require('./tnode');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.data);
    }
    traverse(this.root);
    return result;
  }

  print() {
    function printNode(node, prefix = '', isLeft = true) {
      if (!node) return;
      console.log(prefix + (isLeft ? '├─ ' : '└─ ') + node.data);
      const childPrefix = prefix + (isLeft ? '│  ' : '   ');
      if (node.left || node.right) {
        if (node.left) printNode(node.left, childPrefix, true);
        if (node.right) printNode(node.right, childPrefix, false);
      }
    }
    if (!this.root) {
      console.log('(empty tree)');
      return;
    }
    console.log(this.root.data);
    if (this.root.left) printNode(this.root.left, '', true);
    if (this.root.right) printNode(this.root.right, '', false);
  }
}

module.exports = BinaryTree;
