const { LinkedList } = require('./linkedList');

function mergeSortedLists(list1, list2) {
  if (!list1.head && !list2.head) return new LinkedList();
  if (!list1.head) return list2;
  if (!list2.head) return list1;

  const result = new LinkedList();

  let node1 = list1.head;
  let node2 = list2.head;

  while (node1 !== null && node2 !== null) {
    if (node1.value <= node2.value) {
      result.insert(node1.value);
      node1 = node1.next;
    } else {
      result.insert(node2.value);
      node2 = node2.next;
    }
  }

  while (node1 !== null) {
    result.insert(node1.value);
    node1 = node1.next;
  }

  while (node2 !== null) {
    result.insert(node2.value);
    node2 = node2.next;
  }

  return result;
}

module.exports = mergeSortedLists;
