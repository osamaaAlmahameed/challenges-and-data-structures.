class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.back) {
      this.back.next = newNode;
    }
    this.back = newNode;
    if (!this.front) {
      this.front = newNode;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const temp = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return temp.value;
  }

  peek() {
    if (!this.front) return null;
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;