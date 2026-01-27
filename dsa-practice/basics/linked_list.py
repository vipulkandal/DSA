"""Singly Linked List implementation for DSA revision and interviews."""


class Node:
    """Represents a single node in a singly linked list."""

    def __init__(self, value):
        """
        Initialize a node with a value.

        PSEUDOCODE:
        1. Store the value
        2. Initialize next pointer as None
        """
        self.value = value
        self.next = None


class LinkedList:
    """Singly linked list with basic operations."""

    def __init__(self, value):
        """
        Initialize the linked list with one node.

        PSEUDOCODE:
        1. Create a new node
        2. Set head and tail to this node
        3. Set length = 1
        """
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        """
        Print all values in the linked list.

        PSEUDOCODE:
        1. Start from head
        2. While current node is not None:
            - Print value
            - Move to next node
        3. Print None at the end
        """
        temp = self.head
        while temp:
            print(temp.value, end="->")
            temp = temp.next
        print("None")

    def append(self, value):
        """
        Add a new node at the end of the linked list.

        PSEUDOCODE:
        1. Create new node
        2. If list is empty:
            - head = new node
            - tail = new node
        3. Else:
            - tail.next = new node
            - tail = new node
        4. Increment length
        """
        new_node = Node(value)

        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length = 1
            return True

        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return True

    def prepend(self, value):
        """
        Add a new node at the beginning of the linked list.

        PSEUDOCODE:
        1. Create a new node with given value
        2. If list is empty:
            - Set head = new node
            - Set tail = new node
        3. Else:
            - Point new node's next to current head
            - Move head to new node
        4. Increment length
        5. Return True
        """

        # Create new node
        new_node = Node(value)

        # Case 1: Linked list is empty
        if self.length == 0:
            self.head = new_node
            self.tail = new_node

        # Case 2: Linked list has nodes
        else:
            # New node points to old head
            new_node.next = self.head

            # Move head to new node
            self.head = new_node

        # Always update length
        self.length += 1

        return True

    def pop(self):
        """
        Remove and return the last node of the linked list.

        PSEUDOCODE:
        1. If list is empty → return None
        2. If list has one node:
            - Set head and tail to None
        3. Else:
            - Traverse till last node
            - Keep track of second last node
            - Set tail = second last
            - tail.next = None
        4. Decrement length
        5. Return removed node
        """
        if self.length == 0:
            return None

        temp = self.head
        pre = self.head

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            while temp.next:
                pre = temp
                temp = temp.next

            self.tail = pre
            self.tail.next = None

        self.length -= 1
        return temp

    def pop_first(self):
        """
        Remove and return the first node of the linked list.

        PSEUDOCODE:
        1. If list is empty → return None
        2. Store current head in temp
        3. If only one node:
            - Set head and tail to None
        4. Else:
            - Move head to next node
            - Break link of removed node
        5. Decrement length
        6. Return removed node
        """
        if self.length == 0:
            return None

        temp = self.head

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
            temp.next = None

        self.length -= 1
        return temp

    def get(self, index):
        """
        Return the value at a given index in the linked list.

        PSEUDOCODE:
        1. If index is out of bounds (index < 0 or index >= length):
            - Return None
        2. Start from head
        3. Initialize counter = 0
        4. Traverse the list:
            - If counter == index, return current node. For value print(get(2).value)
            - Move to next node
            - Increment counter
        5. If index not found, return None
        """

        # Edge case: invalid index
        if index < 0 or index >= self.length:
            return None

        temp = self.head
        count = 0

        # Traverse from head
        while temp:
            if count == index:
                return temp

            temp = temp.next
            count += 1

        # Index not found (safety fallback)
        return None



# =========================
# Example Usage
# =========================
ll = LinkedList(10)
ll.append(20)
ll.append(30)
ll.append(40)

ll.print_list()
print("Get value is ", ll.get(0))

ll.print_list()
