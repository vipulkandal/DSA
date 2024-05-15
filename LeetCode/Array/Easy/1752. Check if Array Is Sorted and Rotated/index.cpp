#include <iostream>
#include <vector>

using namespace std;

bool isArraySortedAndRotated(vector<int> &nums)
{
    int count = 0;
    for (int i = 1; i < nums.size(); i++)
    {
        if (nums[i] < nums[i - 1])
        {
            count++;
        }
    }
    if (nums[nums.size() - 1] > nums[0])
    {
        count++;
    }
    return count <= 1;
}

/*
 * nums[(i + 1) % n] : Reason as follows
 * 1 % 5 = 1
 * 4 % 5 = 4
 * 5 % 5 = 0
 *
 * Basically compares last and first Element
 * i.e It can check array is rotated and sorted at the same time.
 */
bool isArraySortedAndRotatedEfficient(vector<int> &nums)
{
    int count = 0;
    int n = nums.size();

    for (int i = 0; i < nums.size(); i++)
    {
        // Check the number of time array is unsorted
        if (nums[i] > nums[(i + 1) % n])
            count++;
    }

    // If unsorted count in more than one, then its not sorted.
    // One can be because array is rotated too.
    return count <= 1;
}

int main()
{
    vector<int> nums = {3, 4, 5, 1, 2};
    cout << isArraySortedAndRotated(nums);
    // cout << isArraySortedAndRotatedEfficient(nums);

    return 0;
}