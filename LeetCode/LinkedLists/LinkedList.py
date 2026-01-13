# ==================================================
# SINGLY LINKED LIST – APPEND & PRINT
# ==================================================


# ------------------------------
# WHAT IS A LINKED LIST?
# ------------------------------
"""
A Linked List is a linear data structure where:
- Each element (node) contains:
  1. Data
  2. Reference (pointer) to the next node
- Elements are NOT stored in contiguous memory

Structure:
head → Node → Node → Node → None
"""


# ------------------------------
# NODE STRUCTURE
# ------------------------------
"""
Each Node has:
- data  → value stored
- next  → reference to next node
"""

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# ------------------------------
# LINKED LIST STRUCTURE
# ------------------------------
"""
LinkedList stores:
- head → reference to the first node
"""

class LinkedList:
    def __init__(self):
        self.head = None


    # ------------------------------
    # APPEND NODE AT END
    # ------------------------------
    """
    Append a new node at the end of the linked list.

    Steps:
    1. Create a new node
    2. If list is empty, make new node the head
    3. Otherwise, traverse till the last node
    4. Link last node to new node
    """
    def append_List(self, data):
        new_node = Node(data)

        # Case 1: Empty list
        if self.head is None:
            self.head = new_node
            return
        
        # Case 2: Traverse to last node
        temp = self.head
        while temp.next is not None:
            temp = temp.next
            
        temp.next = new_node


    # ------------------------------
    # PRINT LINKED LIST
    # ------------------------------
    """
    Print all nodes of the linked list in one line.

    Traversal continues until temp becomes None.
    """
    def print_List(self):
        temp = self.head
        while temp is not None:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")


# ------------------------------
# EXAMPLE USAGE
# ------------------------------
ll = LinkedList()

ll.append_List(1)
ll.append_List(2)
ll.append_List(3)
ll.append_List(4)
ll.append_List(5)

ll.print_List()


# ------------------------------
# OUTPUT
# ------------------------------
"""
1 -> 2 -> 3 -> 4 -> 5 -> None
"""


# ------------------------------
# TIME & SPACE COMPLEXITY
# ------------------------------
"""
Append:
- Time Complexity: O(n)
- Space Complexity: O(1)

Print:
- Time Complexity: O(n)
- Space Complexity: O(1)
"""


# ------------------------------
# IMPORTANT INTERVIEW NOTES
# ------------------------------
"""
- LinkedList stores 'head', not 'next'
- Traversal never creates new nodes
- Use 'while temp is not None' to traverse entire list
- Use 'while temp.next is not None' to reach last node
"""
