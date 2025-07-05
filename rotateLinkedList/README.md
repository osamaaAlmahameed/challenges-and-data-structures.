# Rotate Linked List by K

## Problem Domain
Rotate a singly linked list to the **left** by `k` positions. If `k` is negative, rotate to the **right**.

## Example
Input: `1 -> 2 -> 3 -> 4 -> 5 -> 6`, k = 2  
Output: `3 -> 4 -> 5 -> 6 -> 1 -> 2`

Input: `10 -> 20 -> 30 -> 40 -> 50`, k = 3  
Output: `40 -> 50 -> 10 -> 20 -> 30`

Input: `5 -> 10 -> 15 -> 20`, k = -1  
Output: `20 -> 5 -> 10 -> 15`

## Edge Cases
- `k = 0`: list stays the same
- `k < 0`: rotate right
- `k > list length`: normalize with `k % length`

## Algorithm
1. Get list length.
2. Normalize `k`.
3. Find new head at position `k`.
4. Break the link and rewire tail to old head.

## Big-O Complexity
- Time: O(n)
- Space: O(1)

## Screenshot Output
