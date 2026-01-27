# Singly Linked List – Notes


## What is a Linked List?
A linked list is a linear data structure where elements are stored in nodes.
Each node contains:
- data (value)
- reference to the next node


## Why Linked List?
- Dynamic size
- Efficient insertion & deletion
- No shifting of elements


## Core Properties
- head → first node
- tail → last node
- length → number of nodes


## Time Complexity
| Operation | Time |
|---------|------|
| append | O(1) |
| prepend | O(1) |
| pop | O(n) |
| pop_first | O(1) |
| get | O(n) |


## Key Rules
- Never move `head` directly while traversing
- Always update `length`
- Singly linked list has no backward traversal