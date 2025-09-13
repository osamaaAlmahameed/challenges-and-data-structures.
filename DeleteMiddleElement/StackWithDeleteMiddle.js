const Stack = require('./Stack');

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    const n = this.size();
    if (n === 0) return;
    if (n === 1) {
      this.pop();
      return;
    }

    const midIndex = Math.floor(n / 2) - (n % 2 === 0 ? 1 : 0);
    const tempStack = new Stack();

    for (let i = 0; i < n; i++) {
      const val = this.pop();
      if (i !== midIndex) {
        tempStack.push(val);
      }
    }

    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }

  print() {
    console.log("Stack: Top -> " + this.toArray().join(' -> '));
  }
}

module.exports = StackWithDeleteMiddle;
