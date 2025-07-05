const LinkedList = require('./linkedList');

// Create a new linked list 
const list = new LinkedList();

// Adding some nodes in list
list.add(5);
list.add(10);
list.add(20);
list.add(30);

// Print the list 
console.log("Initial linked list:");
list.printList();

// Removing a node
console.log("Removing node with value 10...");
list.remove(10);
list.printList(); // Checking if it was removed or not

// Checking if certain values exist
console.log("Does the list contain 20?", list.includes(20)); // Should be true
console.log("Does the list contain 10?", list.includes(10)); // Should be false

// Inserting a node at a specific position
console.log("Inserting 15 at index 2...");
list.insertAt(15, 2);
list.printList();

// Edge case tests
console.log("Trying to remove from an empty list...");
const emptyList = new LinkedList();
emptyList.remove(5);

console.log("Trying to print an empty list...");
emptyList.printList();

console.log("Trying to insert at an invalid index...");
list.insertAt(99, 10); 
list.printList();

console.log("Finished testing linked list operations!");
