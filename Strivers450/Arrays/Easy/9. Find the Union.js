/**
 *
 * Time Complexity: O(n+m), where 𝑛 is the size of arr1 and 𝑚 is the size of arr2.
 * Space Complexity: O(n+m)
 * 
 * arr1[] = {1,2,3,4,5,6,7,8,9,10}
   arr2[] = {2,3,4,4,5,11,12}

   Output: {1,2,3,4,5,6,7,8,9,10,11,12}

 */

const union = (arr1, arr2) => {
  let i = 0, // Pointer for arr1
    j = 0, // Pointer for arr2
    unionArr = []; // Result array to store the union

  // Traverse both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // Add arr1[i] if it's not already the last value in unionArr
      if (arr1[i] !== unionArr[unionArr.length - 1]) {
        unionArr.push(arr1[i]);
      }
      i++; // Move pointer for arr1
    } else if (arr1[i] > arr2[j]) {
      // Add arr2[j] if it's not already the last value in unionArr
      if (arr2[j] !== unionArr[unionArr.length - 1]) {
        unionArr.push(arr2[j]);
      }
      j++; // Move pointer for arr2
    } else {
      // Both elements are equal, add one of them if not already added
      if (arr1[i] !== unionArr[unionArr.length - 1]) {
        unionArr.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  // Handle remaining elements in arr1
  while (i < arr1.length) {
    if (arr1[i] !== unionArr[unionArr.length - 1]) {
      unionArr.push(arr1[i]);
    }
    i++;
  }

  // Handle remaining elements in arr2
  while (j < arr2.length) {
    if (arr2[j] !== unionArr[unionArr.length - 1]) {
      unionArr.push(arr2[j]);
    }
    j++;
  }

  return unionArr;
};

//Algorithm Walkthrough for unionUsingSet
/**
 * 
 * 
1. Initialization:

    - Two pointers (i and j) start from the beginning of arr1 and arr2, respectively.
    - An empty result array is used to store the union of the two arrays.
    - A Set called seen is used to track the elements already added to result to prevent duplicates.

2. Main Merging Loop:

    - The function enters a while loop that continues until one of the arrays is fully traversed.
    At each step:
    - If the element in arr1[i] is smaller, it is added to result if it's not already in the seen set, and pointer i is incremented.
    - If the element in arr2[j] is smaller, it is added to result if it's not already in the seen set, and pointer j is incremented.
    - If both elements are equal, the element is added to result and both pointers are incremented.

3. Remaining Elements:
    - After the main loop, any remaining elements in arr1 or arr2 are added to result if they are not already in the seen set.

4. Final Output:

    - The merged result array, which contains the union of the two sorted arrays without duplicates, is returned.

  Time Complexity:
      O(n + m):
     -  n is the length of arr1, and m is the length of arr2.
      - Both arrays are traversed at most once (with two pointers), and each element is checked against the Set, which performs operations in O(1) time on average.
      Therefore, the total time complexity is O(n + m).
  Space Complexity:
      O(n + m):
      - The result array can store up to n + m elements in the worst case.
      - The Set can also store up to n + m elements (if there are no duplicates).
      - The auxiliary space complexity is O(n + m), which is the space required for the result and the Set.
 */

const unionUsingSet = (arr1, arr2) => {
  let i = 0,
    j = 0;
  const result = [];
  const seen = new Set(); // Set to keep track of elements already added

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (!seen.has(arr1[i])) {
        seen.add(arr1[i]);
        result.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (!seen.has(arr2[j])) {
        seen.add(arr2[j]);
        result.push(arr2[j]);
      }
      j++;
    } else {
      if (!seen.has(arr1[i])) {
        seen.add(arr1[i]);
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (!seen.has(arr1[i])) {
      seen.add(arr1[i]);
      result.push(arr1[i]);
    }
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (!seen.has(arr2[j])) {
      seen.add(arr2[j]);
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
};

// Example usage
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

// console.log("Union of arrays:", union(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log("Returns: ", unionUsingSet(arr1, arr2)); // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
