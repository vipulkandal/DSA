/* Binary Search: Search the "target" value in the array and return its index.

Binary search works on the divide and conquer approach, i.e. the list from which the
search is to be done is divided into two halves, and then the searched element is
compared with the middle element in the array.

Time Complexity: O(log n) ; Whenever length is halved then O(log n) complexity is there.
Space Complexity: O(N)

*/

#include <iostream>
#include <limits.h>
using namespace std;

int main()
{
    int arr[10] = {3, 6, 8, 10, 11, 23, 25, 27, 36, 56};
    int size = 10, start = 0, mid, end = size - 1, target = 36;

    while (start <= end)
    {
        mid = start + (end - start) / 2; // Equivalent to (star + end) / 2

        if (arr[mid] == target)
        {
            cout << mid;
            return mid;
        }
        else if (arr[mid] < target)
        {
            start = mid + 1;
        }
        else
            end = mid - 1;
    }

    return -1;
}