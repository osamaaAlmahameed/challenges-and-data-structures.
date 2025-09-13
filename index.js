const BinarySearchTree = require("./BinarySearchTree");

console.log("🌳 Binary Search Tree Example 🌳");

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

console.log("PreOrder:", bst.preOrder());
console.log("InOrder:", bst.inOrder());
console.log("PostOrder:", bst.postOrder());

console.log("Contains 7?", bst.contains(7)); // true
bst.remove(5);
console.log("Contains 5?", bst.contains(5)); // false

console.log("\nTree structure:");
bst.print();
