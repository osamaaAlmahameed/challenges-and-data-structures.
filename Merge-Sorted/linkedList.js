class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insert(value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  toString(){
    let current = this.head;
    let result = '';
    while (current) {
      result += `{${current.value}} => `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

module.exports = { Node, LinkedList };
