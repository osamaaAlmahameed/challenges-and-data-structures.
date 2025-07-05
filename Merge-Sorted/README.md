# 🧩 Merge Sorted Linked Lists

## 📜 Problem Domain

Merge two **sorted linked lists** into a single sorted linked list. Use the existing `LinkedList` and `Node` classes.

---

## 📥 Inputs

- Two **sorted** linked lists.

### Example:

List 1: `1 -> 3 -> 5`  
List 2: `2 -> 4 -> 6`

---

## 📤 Output

- A new merged linked list that maintains sorted order:
  
  `1 -> 2 -> 3 -> 4 -> 5 -> 6`

---

## 🧪 Edge Cases

- ✅ One list is empty → return the non-empty list.
- ✅ Both lists are empty → return `null` or an empty list.
- ✅ Lists with duplicate values → duplicates should be preserved.

---

## ⚙️ Algorithm (Plain Steps)

1. Use two pointers .
2. Compare values of both nodes.
3. Add the smaller value to the merged list.
4. Move the pointer that matched.
5. When one list ends, attach the rest of the other.
6. Return the new merged list.

---

## 💻 Code (Simplified)

```js
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
```
![My Image](https://github.com/osamaaAlmahameed/challenges-and-data-structures./blob/main/Merge-Sorted/mergeListSort.png?raw=true)
![My Image](https://github.com/osamaaAlmahameed/challenges-and-data-structures./blob/main/Merge-Sorted/console-output.png?raw=true)
