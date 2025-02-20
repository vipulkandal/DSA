class Node {
  constructor(key, value) {
    this.key = key; // Store the key
    this.value = value; // Store the value
    this.next = null; // Pointer to the next node in case of collision (chaining)
  }
}

class HashTable {
  constructor(size = 10) {
    this.size = size; // Size of the hash table
    this.buckets = new Array(size).fill(null); // Initialize an array with null values
  }

  // Simple hash function: returns the remainder when key length is divided by 7
  _hash(key) {
    return key.length % 7; // Mod of it will be INDEX where insert, Delete, Search will be done.
    /**
     * 7 is used since it is a prime number, won't be advised for larger dataSet
     * Ideally we should use prime number closer to size of table, To avoid COLLISION (more than one data on singe index)
     */
  }

  // Insert a key-value pair into the hash table
  set(key, value) {
    const index = this._hash(key); // Compute index using hash function
    if (!this.buckets[index]) {
      // If no entry exists, create a new node
      this.buckets[index] = new Node(key, value);
    } else {
      // Collision handling using chaining
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value; // Update existing key
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
      current.next = new Node(key, value); // Append new node at the end
    }
  }

  // Retrieve the value associated with a key
  get(key) {
    const index = this._hash(key); // Compute index
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) return current.value; // Return value if key is found
      current = current.next;
    }
    return undefined; // Return undefined if key is not found
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next; // Remove node from the linked list
        } else {
          this.buckets[index] = current.next; // Remove first node in the bucket
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false; // Return false if key is not found
  }

  // Display the contents of the hash table
  display() {
    this.buckets.forEach((bucket, index) => {
      let chain = "";
      let current = bucket;
      while (current) {
        chain += `(${current.key}: ${current.value}) -> `;
        current = current.next;
      }
      console.log(`${index}: ${chain || "Empty"}`);
    });
  }
}

// Example Usage
const ht = new HashTable();
ht.set("name", "Alice"); // Insert "name" with value "Alice"
ht.set("age", 25); // Insert "age" with value 25
ht.set("mane", "Bob"); // Causes a collision with "name"
ht.display(); // Display current state of hash table
console.log(ht.get("age")); // Retrieve value associated with "age"
ht.remove("name"); // Remove "name" key
ht.display(); // Display updated hash table
