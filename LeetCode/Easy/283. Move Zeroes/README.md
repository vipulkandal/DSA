[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

`Easy`

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**

**Input:** nums = [0,1,0,3,12]
**Output:** [1,3,12,0,0]

**Example 2:**

**Input:** nums = [0]
**Output:** [0]

**Constraints:**

- `1 <= nums.length <= 104`
- `-231 <= nums[i] <= 231 - 1`

# Solution

### **Optimal Approach(Using 2 pointers)**:

We can optimize the approach using 2 pointers i.e. i and j. The pointer j will point to the first 0 in the array and i will point to the next index.

Assume, the given array is {1, 0, 2, 3, 2, 0, 0, 4, 5, 1}. Now, initially, we will place the 2-pointers like the following:

![](https://static.takeuforward.org/wp/uploads/2023/06/Screenshot-2023-06-26-162005.png)

The algorithm will be the following.

### **Algorithm:**

1.  First, using a loop, we will place the pointer j. If we don’t find any 0, we will not perform the following steps.
2.  After that, we will point i to index j+1 and start moving the pointer using a loop.
3.  While moving the pointer i, we will do the following:
    1.  **If a[i] != 0 i.e. a[i] is a non-zero element:** We will swap a[i] and a[j]. Now, the current j is pointing to the non-zero element a[i]. So, we will shift the pointer j by 1 so that it can again point to the first zero.
4.  Finally, our array will be set in the right manner.

**Dry run:** _Please refer_ [_video_](https://youtu.be/wvcQg43_V8U) _for a detailed dry run._

The first 2 steps are shown below:

![](https://static.takeuforward.org/wp/uploads/2023/06/Screenshot-2023-06-26-162339.png)
