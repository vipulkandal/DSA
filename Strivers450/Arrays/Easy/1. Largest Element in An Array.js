/**
 * 
 *  **Problem Name:** Find the Largest element in an array
 * 
    **Problem Statement:** Given an array, we have to find the largest element in the array.

    **Examples**

    **Example 1:****Input:** arr[] = {2,5,1,3,0};
    **Output:** 5
    **Explanation:** 5 is the largest element in the array. 

    **Example2:****Input:** arr[] = {8,10,5,7,9};
    **Output:** 10
    **Explanation:** 10 is the largest element in the array. 
 */


const largestElement = (arr) => {
  let lNum = arr[0]; // Largest Number

  for (let i = 1; i < arr.length; i++) {
    if (lNum < arr[i]) {
      lNum = arr[i];
    }
  }

  return lNum;
};

let arr = [2, 6, 4, 8, 3, 5, 4];
console.log("Largest Element in an array is: ", largestElement(arr));
