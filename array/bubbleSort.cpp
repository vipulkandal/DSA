/*  Bubble Sort:

*/

#include <iostream>
#include <limits.h>
using namespace std;

int main(){

    int arr[]= {2,7,4,9,1};
    int size = 5;

    // Print entered array
    cout << "Unsorted array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    for (int i = 0; i < size-1; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if (arr[j] < arr[i])
            {
                swap(arr[i], arr[j]);
            }            
        }        
    }

// Print entered array
    cout << "Sorted array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    

    return 0;
}
