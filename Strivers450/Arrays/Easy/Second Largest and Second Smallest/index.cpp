#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int secondSmallest(vector<int> &arr)
{
    int small = INT_MAX, secondSmallest = INT_MAX;
    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] < small)
        {
            secondSmallest = small;
            small = arr[i];
        }
        else if ((arr[i] < secondSmallest) && (arr[i] != small))
        {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

int secondLargest(vector<int> &arr)
{
    int largest = INT_MIN, secondLargest = INT_MIN;

    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest)
        {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

int main()
{
    vector<int> nums = {12, 35, 11, 10, 34, 1};
    cout << "The second Smallest element in the array is: " << secondSmallest(nums) << endl;
    cout << "The second Largest element in the array is: " << secondLargest(nums) << endl;
    return 0;
}