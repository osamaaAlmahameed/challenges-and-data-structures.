
# Delete Middle Element of a Stack

## Problem Domain

Implement a method to delete the middle element of a stack.  
- If the stack size is odd, remove the exact middle element.  
- If the stack size is even, remove the lower middle element (index `n/2 - 1`).  
- The stack order must remain the same after deletion.

---

## Inputs and Expected Outputs

**Example 1 (Odd number of elements):**

Input Stack (top → bottom):  
`5 → 8 → 3 → 14 → 7`

Operation:  
`deleteMiddle()`

Output Stack (top → bottom):  
`5 → 8 → 14 → 7`

---

**Example 2 (Even number of elements):**

Input Stack (top → bottom):  
`2 → 5 → 8 → 3 → 14 → 7`

Operation:  
`deleteMiddle()`

Output Stack (top → bottom):  
`2 → 5 → 3 → 14 → 7`

---

## Edge Cases

- Empty stack: No operation, stack remains empty.  
- Stack with one element: Deleting middle removes the only element, resulting in an empty stack.  
- Even number of elements: Remove lower middle element (`n/2 - 1`).  
- Odd number of elements: Remove exact middle (`floor(n/2)`).

---

## Visual (Whiteboard Illustration)
