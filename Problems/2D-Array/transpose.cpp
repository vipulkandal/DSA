/*
    int matrix[row][col] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};

    Orignal array
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25

    Transpose array
    1 6 11 16 21
    2 7 12 17 22
    3 8 13 18 23
    4 9 14 19 24
    5 10 15 20 25
*/

#include <iostream>
#include <vector>

using namespace std;

int main()
{
    const int row = 5;
    const int col = 5;
    int matrix[row][col] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};

    cout << "Orignal array" << endl;
    for (int i = 0; i < col; i++)
    {
        for (int j = 0; j < row; j++)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
