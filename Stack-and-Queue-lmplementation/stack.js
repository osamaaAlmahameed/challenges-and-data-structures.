class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;
    const temp = this.top;
    this.top = this.top.next;
    return temp.value;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;