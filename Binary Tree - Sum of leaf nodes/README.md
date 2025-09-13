# Binary Tree - Sum of Leaf Nodes

## Problem
Find the sum of all leaf nodes in a binary tree.

A **leaf node** is a node with no children.  
Traverse the tree to find all leaf nodes and sum their values.

### Edge Cases
- Empty tree → sum = 0
- Single node tree → sum = node value
- Negative values → sum may be negative

---

## Example Tree

    9
   / \
  8   12
 / \  / \
3  7 17 23
 \
  4



**Leaf nodes:** 4, 7, 17, 23  
**Sum = 51**

---

## Usage / Run

1. Navigate to the folder:
```bash
cd Data\ Structures/Trees/Treelmplementation/LeafSum
