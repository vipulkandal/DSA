#include <iostream>
#include <vector>
using namespace std;

// Function to print a 2D vector
void printMatrix(const vector<vector<int>> &matrix)
{
    for (int i = 0; i < matrix.size(); i++)
    {
        for (int j = 0; j < matrix[i].size(); j++)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

int main()
{
    // Create 2-D vector
    vector<vector<int>> matrix(3, vector<int>(4, 1));

    // Print the matrix using the printMatrix function
    printMatrix(resultMatrix);

    cout << endl;
    cout << "Rows: " << matrix.size() << endl;
    cout << "Columns: " << matrix[0].size() << endl;

    return 0;
}
