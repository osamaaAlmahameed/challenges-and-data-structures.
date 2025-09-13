class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  display() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(" -> ");
  }

  getLength() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  rotateLeft(k) {
    if (!this.head || k === 0) return;

    const length = this.getLength();
    k = k % length;

    if (k < 0) {
      k = length + k; // Rotate right
    }

    if (k === 0) return;

    let current = this.head;
    let count = 1;

    while (count < k && current) {
      current = current.next;
      count++;
    }

    if (!current || !current.next) return;

    const newHead = current.next;
    current.next = null;

    let tail = newHead;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = this.head;
    this.head = newHead;
  }
}

module.exports = { Node, LinkedList };
