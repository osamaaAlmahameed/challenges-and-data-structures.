const TNode = require('./tnode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.data) return; // ignore duplicates
      if (value < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.data) return true;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        let successor = node.right;
        while (successor.left) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = removeNode(node.right, successor.data);
        return node;
      }
    };
    const existed = this.contains(value);
    if (!existed) return false;
    this.root = removeNode(this.root, value);
    return true;
  }
}

module.exports = BinarySearchTree;
