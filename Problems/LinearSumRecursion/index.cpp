#include <iostream>
using namespace std;

int LinearSum(int arr[], int n)
{
    if (n == 1)
    {
        return arr[0];
    }

    return LinearSum(arr, n - 1) + arr[n - 1];
}

int main()
{

    int arr[5] = {4,
                  3,
                  6,
                  2,
                  5};

    int n = 5;

    cout << LinearSum(arr, n);

    return 0;
}

/**
LinearSum([4, 3, 6, 2, 5], 5)
|
V
LinearSum([4, 3, 6, 2, 5], 4) + 5
|                           |
V                           V
LinearSum([4, 3, 6, 2], 4) + 2 + 5
|                           |      |
V                           V      V
LinearSum([4, 3, 6], 3) + 6 + 2 + 5
|                           |      |
V                           V      V
LinearSum([4, 3], 2) + 3 + 6 + 2 + 5
|                           |      |
V                           V      V
LinearSum([4], 1) + 4 + 3 + 6 + 2 + 5
|                           |      |
V                           V      V
4 + 4 + 3 + 6 + 2 + 5
|                  |
V                  V
15
*/