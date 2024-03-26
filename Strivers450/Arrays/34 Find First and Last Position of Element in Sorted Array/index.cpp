//  34: Find First and Last Position of Element in Sorted Array

/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/

#include <iostream>
using namespace std;

void bruteForce(int arr[], int length, int target)
{
    // for first Postion
    for (int i = 0; i < length; i++)
    {
        if (arr[i] == target)
        {
            cout << "First Postion is: " << i << endl;
            break;
        }
    }

    // for last Postion
    for (int i = length - 1; i >= 0; i--)
    {
        if (arr[i] == target)
        {
            cout << "Last Postion is: " << i;
            break;
        }
    }
}

int main()
{
    int sampleArr[] = {5, 7, 7, 8, 8, 10};
    int lengthOfArr = sizeof(sampleArr) / sizeof(sampleArr[0]);
    int target = 8;

    bruteForce(sampleArr, lengthOfArr, target);
    return 0;
}
