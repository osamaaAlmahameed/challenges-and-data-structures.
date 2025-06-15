


# Singly Linked List Implementation

## 🧠 Problem Domain

Implement a singly linked list in JavaScript.  
The list should support adding, removing, searching, inserting, and printing elements.

---

## 🧪 Features

- Add a node to the end of the list.
- Remove a node by value.
- Check if the list includes a specific value.
- Insert a node at a specific index.
- Print the list as a string: Head => 5 => 10 → 15 => null.

---

## 🔣 Inputs and Expected Outputs

| Function       | Input           | Output                      
|----------------|------------------|------------------------------
| add            | 5, 10, 20, 30   | Head => 5 => 10 => 20 => 30 => null   
| remove         | 10              | Head => 5 => 20 => 30 => null        
| includes       | 20              | true                        
| includes       | 99              | false                       
| insertAt       | (25, 1)         | Head => 5 => 15 => 20 => null   

---

## 🧪 Edge Cases

- Printing an empty list .
- Removing from an empty .
- Inserting at invalid index .

---

![Whiteboard](https://github.com/osamaaAlmahameed/challenges-and-data-structures./blob/e7d6ad22727c43da954b133390b53c3257c2459f/Linked-List-Implementation/Whiteboard.png?raw=true)

## ⚙️ Big O Complexity

| Operation   | Time Complexity | Space Complexity |
|-------------|------------------|-------------------|
| add         | O(n)             | O(1)              |
| remove      | O(n)             | O(1)              |
| includes    | O(n)             | O(1)              |
| insertAt    | O(n)             | O(1)              |

---

![output](https://github.com/osamaaAlmahameed/challenges-and-data-structures./raw/main/Linked-List-Implementation/console-output.png)
