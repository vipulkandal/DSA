#include <iostream>
#include <vector>

using namespace std;

int main()
{
    const int row = 3;
    const int col = 4;
    int arr[row][col] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};

    int top = 0;
    int bottom = row - 1;
    int left = 0;
    int right = col - 1;

    while (top <= bottom && left <= right)
    {
        // Left to Right
        for (int i = left; i <= right; i++)
        {
            cout << arr[top][i] << " ";
        }
        top++;

        // Top to Bottom
        for (int i = top; i <= bottom; i++)
        {
            cout << arr[i][right] << " ";
        }
        right--;

        if (top <= bottom)
        {
            // Right to Left
            for (int i = right; i >= left; i--)
            {
                cout << arr[bottom][i] << " ";
            }
            bottom--;
        }

        if (left <= right)
        {
            // Bottom to Top
            for (int i = bottom; i >= top; i--)
            {
                cout << arr[i][left] << " ";
            }
            left++;
        }
    }
    return 0;
}
