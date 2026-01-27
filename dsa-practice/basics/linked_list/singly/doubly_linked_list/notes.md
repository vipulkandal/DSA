# ============================================================
#                DOUBLY LINKED LIST (DLL) - NOTES
# ============================================================

# ------------------------------------------------------------
# What is a Doubly Linked List?
# ------------------------------------------------------------
# A Doubly Linked List is a data structure where:
# - Each node points to the NEXT node
# - Each node also points to the PREVIOUS node
#
# This allows traversal in BOTH directions.
#
# Example:
# None <- 1 <-> 2 <-> 3 -> None


# ------------------------------------------------------------
# Node Structure in DLL
# ------------------------------------------------------------
# Each node has:
# 1. value  -> data stored in node
# 2. next   -> reference to next node
# 3. prev   -> reference to previous node

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None   # pointer to next node
        self.prev = None   # pointer to previous node


# ------------------------------------------------------------
# Doubly Linked List Structure
# ------------------------------------------------------------
# DLL keeps track of:
# 1. head   -> first node
# 2. tail   -> last node
# 3. length -> number of nodes

class DoublyLinkedList:
    def __init__(self, value):
        new_node = Node(value)

        # When list has only one node:
        self.head = new_node
        self.tail = new_node
        self.length = 1


# ------------------------------------------------------------
# Key Differences: Singly LL vs Doubly LL
# ------------------------------------------------------------
# Singly Linked List:
# - Node has only NEXT pointer
# - Can move only forward
# - Less memory usage
#
# Doubly Linked List:
# - Node has NEXT and PREV pointers
# - Can move forward and backward
# - More memory usage
# - Easier deletion and backward traversal


# ------------------------------------------------------------
# Important DLL Pointer Rules (VERY IMPORTANT)
# ------------------------------------------------------------
# 1. If you update next, you probably need to update prev too
#
# Example:
# node1.next = node2
# node2.prev = node1
#
# 2. Head.prev should ALWAYS be None
# 3. Tail.next should ALWAYS be None
#
# Forgetting these causes bugs!


# ------------------------------------------------------------
# Example DLL with 3 nodes
# ------------------------------------------------------------
# head                        tail
#  ↓                           ↓
# None <- 10 <-> 20 <-> 30 -> None
#
# 10.prev = None
# 10.next = 20
#
# 20.prev = 10
# 20.next = 30
#
# 30.prev = 20
# 30.next = None


# ------------------------------------------------------------
# Time Complexity (Compared to Singly LL)
# ------------------------------------------------------------
# Operation         DLL        SLL
# ---------------------------------
# Append            O(1)       O(1)
# Pop               O(1)       O(n)
# Prepend           O(1)       O(1)
# Pop First         O(1)       O(1)
# Get (by index)    O(n)       O(n)
#
# DLL pop() is faster because we can go backward using prev


# ------------------------------------------------------------
# Why use Doubly Linked List?
# ------------------------------------------------------------
# - Easy backward traversal
# - Faster deletion when node is known
# - Used in:
#   * Browser history (back / forward)
#   * Undo / redo operations
#   * Music playlists
#   * LRU Cache (very important interview topic)


# ------------------------------------------------------------
# Common Mistakes in DLL
# ------------------------------------------------------------
# 1. Forgetting to update prev pointer
# 2. Forgetting to set head.prev = None
# 3. Forgetting to set tail.next = None
# 4. Updating only one direction (next but not prev)
#
# Always think:
# "If I move forward, can I move backward too?"



