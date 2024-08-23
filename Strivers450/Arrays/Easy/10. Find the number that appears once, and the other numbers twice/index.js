let arr = [4, 1, 2, 1, 2];

// Not much efficient since it is taking too much of space
// [1000,2,3] it would create array of 1000 and rest will be 0
// Space is wasted
const getSingleElementHashing = (arr) => {
  const max = arr[0];

  // Finding max value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  // Declared Hash Map
  let hash = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
    //console.log(hash);
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === 1) {
      return arr[i];
    }
  }
  return -1;
};

function getSingleElementHashMap(arr) {
    // Size of the array:
    const n = arr.length;

    // Declare the hashmap.
    // And hash the given array:
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        // hashmap.get(num) || 0: This checks if the element num already exists in the Map. 
        // If it does, it retrieves the current count. If it doesn't, it defaults to 0.
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    // Find the single element and return the answer:
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

console.log("The single element is:", getSingleElementHashMap(arr));
