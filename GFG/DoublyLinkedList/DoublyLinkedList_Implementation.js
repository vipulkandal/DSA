class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Function to print DLL forward
function printForward(head) {
  let temp = head;
  console.log("Doubly Linked List (Forward):");
  while (temp !== null) {
    process.stdout.write(temp.data + " ⇄ ");
    // process.stdout.write is a Node.js method used to print output to the console without automatically adding a new line (\n).
    // Unlike console.log(), which adds a new line after each call
    temp = temp.next;
  }
  console.log("null");
}

// Insert at the begining
// TC: O(1), SC: O(1)
function prepend(head, x) {
  let temp = new Node(x); // Create a new node with value x
  temp.next = head; // Point new node's next to current head

  if (head !== null) {
    // If the list is not empty
    head.prev = temp; // Update the old head's prev to point to new node
  }

  return temp; // New head of the list
}

// Insert at the end
// TC: O(N), SC: O(1)
function append(head, x) {
  // Step 1: Create a new node with the given value
  let temp = new Node(x);

  // Step 2: If the list is empty (head is null), return the new node as the head
  if (!head) return temp;

  // Step 3: Traverse the list to find the last node
  let current = head;
  while (current.next !== null) {
    current = current.next; // Move to the next node
  }

  // Step 4: Append the new node at the end
  current.next = temp; // Set the last node's next to new node
  temp.prev = current; // Set the new node's prev to the last node

  // Step 5: Return the head (unchanged)
  return head;
}

function reverseDoublyLinkedList(head) {
  if (!head) return null; // If the list is empty, return null

  let prev = null,
    current = head;

  while (current !== null) {
    prev = current;
    [current.prev, current.next] = [current.next, current.prev];
    current = current.prev;
  }
  return prev;
}

let head = new Node(10);
head = prepend(head, 5); // Update head to the new node
head = append(head, 20); // Update head to the new node
head = append(head, 30); // Update head to the new node
head = reverseDoublyLinkedList(head); // Update head to the new node

// Printing the list
printForward(head);
