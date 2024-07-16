/* PROBLEM STATEMENT

 * Given a 2D array arr of size row x col, you need to print the array in a wave-like pattern. In a wave-like pattern, the elements of the first column are printed from top to bottom, the elements of the second column are printed from bottom to top, and so on.

 * input: {1 2 3 4 5 6 7 8 9}
 * output: {1 4 7 8 5 2 3 6 9 }

*/

#include <iostream>
using namespace std;

void printWave(int arr[][3], int row, int col)
{
    cout << "Wave Array" << endl;

    for (int j = 0; j < col; j++)
    {
        // If column is even, Print Top to bottom
        if (j % 2 == 0)
        {
            for (int i = 0; i < row; i++)
            {
                cout << arr[i][j] << " ";
            }
        }
        else
        { // If column is odd, Print bottom to top
            for (int i = col - 1; i >= 0; i--)
            {
                cout << arr[i][j] << " ";
            }
        }
    }
}

int main()
{

    /*
     * int row = 3; int col = 3; defines runtime variables, which cannot be used for array dimensions in standard C++.

     * const int row = 3; const int col = 3; defines compile-time constants, which can be used for array dimensions.
    */
    const int row = 3;
    const int col = 3;
    int arr[row][col] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    cout << "Original 2-D Array" << endl;

    // Pring 2-D Array
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cout << arr[i][j] << " ";
        }
    }
    cout << endl;

    printWave(arr, row, col);

    return 0;
}