class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// TC: O(n)
function printLinkedList(head) {
  let current = head;
  let result = "";

  while (current !== null) {
    result += current.data + " -> ";
    current = current.next;
  }
  result += "null";
  console.log(result);
}

// TC: O(n), SC: O(1)
function appendToLinkedList(head, value) {
  let current = head;

  // Traverse to the last node
  while (current.next !== null) {
    current = current.next;
  }

  // Append new node at the end
  current.next = new Node(value);
}

// TC: O(1), SC: O(1)
function deleteFirstNode(head) {
  if (head === null) {
    return null;
  }
  return head.next;
}

// TC: O(n), SC: O(1)
function insertAtGivenPostion(head, data, pos) {
  let temp = new Node(data);
  if (pos === 1) {
    temp.next = head;
    return temp;
  }

  let current = head;
  for (let i = 1; i <= pos - 2 && current != null; i++) {
    current = current.next;
  }

  if (current == null) {
    return head;
  }

  temp.next = current.next;
  current.next = temp;

  return head;
}

// TC: O(n), SC: O(1)
function InsertAtSortedLinkedList(head, target) {
  let temp = new Node(target);

  // Case 1: Insert at the beginning or empty list
  if (head === null || head.data >= target) {
    temp.next = head;
    return temp; // New head
  }

  let current = head;

  // Traverse until we find the correct position
  while (current.next !== null && current.next.data < target) {
    current = current.next;
  }

  // Insert new node in the correct position
  temp.next = current.next;
  current.next = temp;

  return head;
}

// TC: O(n), SC: O(1)
function searchInLinkedList(head, target) {
  let pos = 1;
  while (head != null) {
    if (head.data === target) {
      return pos;
    }
    head = head.next;
    pos++;
  }
  return -1;
}

// TC: O(n), SC: O(1)
function searchInLinkedList_Recursive(head, target, pos = 1) {
  if (head == null) {
    return -1;
  }
  if (head.data == target) {
    return pos;
  }
  head = head.next;
  pos++;
  return searchInLinkedList_Recursive(head, target, pos);
}

function findMid(head) {
  if (head === null) return -1; // Handle empty list

  let slow = head; // Moves one step at a time
  let fast = head; // Moves two steps at a time

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data; // Return middle node's value
}

function nthNodeFromLast(head) {}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

/**
 *  Why wre using 
 *    head = deleteFirstNode(head); // Saving return value in head variable
 *    and not deleteFirstNode(head); directly
 * 
 * ✅ JavaScript passes the reference to head, not head itself, so modifying the reference inside a function does not change the original variable.
   ✅ deleteFirstNode(head); executes but does not update head unless we explicitly assign the return value.
   ✅ Always reassign head after calling deleteFirstNode(head); to properly update the linked list.
 */
// head = deleteFirstNode(head);
printLinkedList(head);
console.log(findMid(head));
printLinkedList(head);
