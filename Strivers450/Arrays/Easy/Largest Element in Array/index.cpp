#include <iostream>
#include <vector>

using namespace std;

// Function to solve the problem
int largestElement(vector<int> &arr)
{
    int largestElement = arr[0];
    for (int i = 1; i < arr.size(); i++)
    {
        if (arr[i] > largestElement)
        {
            largestElement = arr[i];
        }
    }
    return largestElement;
}

int main()
{
    vector<int> nums = {1, 8, 7, 56, 90};
    int result = largestElement(nums);
    cout << "The largest element in the array is: " << result;
    return 0;
}