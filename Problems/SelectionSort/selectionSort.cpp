/*
Selection Sort: Selection sort is a simple and efficient sorting algorithm
that works by repeatedly selecting the smallest (or largest) element from
the unsorted portion of the list and moving it to the sorted portion of the
list.

Time complexity: O(n*2)
Space complexity: O(1)
*/

#include <iostream>
#include <limits.h>
using namespace std;

int main()
{
    int arr[] = {2, 7, 4, 9, 3};
    int sizeOfArray = 5;

    // cout << "Enter the size of array" << endl;
    // cin >> sizeOfArray;

    // // Get input from array
    // for (int i = 0; i < sizeOfArray; i++)
    // {
    //     cout << "Enter value for index " << i << endl;
    //     cin >> arr[i];
    // }

    // Print entered array
    cout << "Unsorted array: ";
    for (int i = 0; i < sizeOfArray; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    for (int i = 0; i < sizeOfArray - 1; i++)
    {
        int index = i;
        for (int j = i + 1; j < sizeOfArray; j++)
        {
            if (arr[i] > arr[j])
            {
                index = j;
            }
        }

        swap(arr[i], arr[index]);
    }

    // Print entered array
    cout << "Sorted array: ";
    for (int i = 0; i < sizeOfArray; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}
