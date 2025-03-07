class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to print the linked list
  printList() {
    let current = this.head;
    let result = "Linked List: ";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Example Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();
