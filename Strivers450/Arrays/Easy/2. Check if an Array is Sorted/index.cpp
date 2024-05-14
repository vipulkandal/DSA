#include <iostream>
#include <vector>

using namespace std;

bool isSorted(int nums[], int size)
{
    for (int i = 1; i < size; i++)
    {
        if (nums[i] < nums[i - 1])
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};

    cout << (isSorted(arr, 5) ? 1 : 0);

    return 0;
}