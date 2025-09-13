const { LinkedList } = require('./linkedList');
const mergeSortedLists = require('./mergeSorted');

// Create first sorted linked list
const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(5);

// Create second sorted linked list
const list2 = new LinkedList();
list2.insert(2);
list2.insert(4);
list2.insert(6);

const mergedList = mergeSortedLists(list1, list2);

console.log('Merged List:', mergedList.toString());
