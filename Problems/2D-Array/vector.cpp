#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    // Create a 2D vector, with 3 rows and 4 columns, and initialize all
    // elements to 3
    int rows = 3;
    int cols = 4;
    vector<vector<int>> matrix(rows, vector<int>(cols, 3));

    // Print out the 2D vector
    cout << "Printing 2D vector:" << endl;
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    // Print out the number of rows and columns in the 2D vector
    cout << "Rows = " << matrix.size() << endl;
    cout << "Columns = " << matrix[0].size() << endl;

    return 0;
}
