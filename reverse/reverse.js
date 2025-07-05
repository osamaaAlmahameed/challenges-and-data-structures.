const Node = require('../node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  reverse() {
    let previous = null;
    let current = this.head;

    while (current !== null) {
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }

    this.head = previous;
  }
}

module.exports = { LinkedList, Node };
