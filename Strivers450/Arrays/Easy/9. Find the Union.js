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

// Example usage
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

console.log("Union of arrays:", union(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
