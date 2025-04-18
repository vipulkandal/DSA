class Node {
  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

// Function to print the tree (In-Order Traversal)
function printTree(node) {
  // Base case: if node is null, just return
  if (node === null) return;

  // First, recursively print the left subtree
  printTree(node.left);

  // Then, print the current node's key
  console.log(node.key);

  // Finally, recursively print the right subtree
  printTree(node.right);
}

// Creating a simple tree
let head = new Node(10);
head.left = new Node(5);
head.right = new Node(20);

// Calling the function to print the tree
printTree(head);
