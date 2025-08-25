## Min Stack Challenge
### Problem Domain
Implement a MinStack class in JavaScript that supports push, pop, top, isEmpty, getMin, and printStack operations, with getMin retrieving the minimum element in constant time complexity.

## install : npm init -y

Inputs and Expected Outputs

push(value): Adds value to stack top
Input: Number
Output: None


pop(): Removes and returns top element
Input: None
Output: Top element or null if empty


top(): Returns top element without removing
Input: None
Output: Top element or null if empty


isEmpty(): Checks if stack is empty
Input: None
Output: Boolean


getMin(): Returns minimum element
Input: None
Output: Minimum element or null if empty


printStack(): Prints stack contents
Input: None
Output: Console log of stack elements



Edge Cases

Empty stack operations
Multiple elements with same minimum value
Negative numbers
Single element stack
Large number of push/pop operations

Visual
[Main Stack]        [Min Stack]
  Top -> 3  ------> Min: 3
         12 ------> Min: 7
         7  ------> Min: 7
         15 ------> Min: 15

Algorithm

Use two arrays: main stack for all elements, minStack for tracking minimums
push(value):
Add value to main stack
If value <= current minimum or minStack is empty, add to minStack


pop():
Remove top element from main stack
If popped element equals current minimum, remove from minStack


top(): Return last element of main stack
isEmpty(): Check if main stack length is 0
getMin(): Return last element of minStack
printStack(): Join main stack elements with " -> "

Real Code
const MinStack = require("./MinStack");
const minStack = new MinStack();
minStack.push(15);    // Top -> 15 (min: 15)
minStack.push(7);     // Top -> 7 -> 15 (min: 7)
minStack.push(12);    // Top -> 12 -> 7 -> 15 (min: 7)
minStack.push(3);     // Top -> 3 -> 12 -> 7 -> 15 (min: 3)
minStack.printStack(); // Output: Top -> 3 -> 12 -> 7 -> 15
console.log("Min:", minStack.getMin()); // Min: 3
console.log("Popped:", minStack.pop()); // Popped: 3
minStack.printStack(); // Output: Top -> 12 -> 7 -> 15
console.log("Min:", minStack.getMin()); // Min: 7
console.log("Top:", minStack.top());    // Top: 12
minStack.push(2);     // Top -> 2 -> 12 -> 7 -> 15 (min: 2)
minStack.printStack(); // Output: Top -> 2 -> 12 -> 7 -> 15
console.log("Min:", minStack.getMin()); // Min: 2
console.log("Is Empty:", minStack.isEmpty()); // Is Empty: false

Console Output Screenshot

Big O Time/Space Complexity

Time Complexity:
push: O(1)
pop: O(1)
top: O(1)
isEmpty: O(1)
getMin: O(1)
printStack: O(n)


Space Complexity:
O(n) for main stack
O(n) for minStack in worst case (when elements are pushed in descending order)

