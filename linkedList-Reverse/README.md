# Linked List Reverse Challenge

## Overview

This project implements a singly linked list in JavaScript with a method to reverse the list in-place. It supports adding nodes, reversing the list, and converting it to an array for easy verification.

## Features

- Create nodes and append them to the list.
- Reverse the linked list efficiently.
- Convert the list to an array for display or testing.
- Includes Jest tests for validation.

## Usage

```js
const { LinkedList } = require('./reverse/reverse');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log('Original list:', list.toArray()); // [1, 2, 3, 4]

list.reverse();

console.log('Reversed list:', list.toArray()); // [4, 3, 2, 1]
