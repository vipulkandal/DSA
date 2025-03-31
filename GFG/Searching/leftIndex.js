/**
 * Finds the leftmost (first) occurrence of target in a sorted array.
 * Uses Binary Search for O(log N) time complexity.
 * 
 * @param {number[]} arr - Sorted array of numbers.
 * @param {number} target - The number to find.
 * @returns {number} - Leftmost index of target, or -1 if not found.
 */
const leftIndex = (arr, target) => {
    let left = 0, right = arr.length - 1;
    let result = -1; // To store the leftmost index of target

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Find middle index

        if (arr[mid] === target) {
            result = mid;   // Store index as a potential leftmost occurrence
            right = mid - 1; // Move search to the left half to find earlier occurrences
        } else if (arr[mid] > target) {
            right = mid - 1; // Move left (target must be in the left half)
        } else {
            left = mid + 1; // Move right (target must be in the right half)
        }
    }

    return result; // Return leftmost occurrence or -1 if not found
};

// Example test cases
console.log(leftIndex([1, 1, 2, 2, 3, 4, 5, 5, 6, 7], 5)); // Output: 6
console.log(leftIndex([1, 2, 2, 2, 3, 3, 4, 4, 5], 3)); // Output: 4
console.log(leftIndex([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(leftIndex([1, 1, 1, 1, 1, 1], 1)); // Output: 0
console.log(leftIndex([5, 6, 7, 8, 9, 10], 5)); // Output: 0
console.log(leftIndex([2, 3, 3, 3, 4, 5, 6], 3)); // Output: 1
