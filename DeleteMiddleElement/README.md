# Delete Middle Element of Stack

## Problem Domain
Remove the middle element from a stack. If the stack has even elements, remove the *lower* middle.

## Inputs and Expected Outputs
```js
const stack = new StackWithDeleteMiddle();
[7, 14, 3, 8, 5].forEach(n => stack.push(n));
stack.deleteMiddle();
// Output: Top -> 5 -> 8 -> 14 -> 7
