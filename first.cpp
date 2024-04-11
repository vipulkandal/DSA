#include <iostream>
#include <vector>

using namespace std;

// Function to solve the problem
vector<int> solveProblem(vector<int> &nums)
{
    // Your logic for solving the problem goes here
    // This is just a placeholder example
    vector<int> result;
    for (int i = 0; i < nums.size(); ++i)
    {
        result.push_back(nums[i] * 2); // Example logic, doubling each element
    }
    return result;
}

// Function to handle input
vector<int> getInput()
{
    // Input handling logic goes here
    // This is just a placeholder example
    vector<int> nums = {1, 2, 3, 4, 5}; // Example input
    return nums;
}

// Function to handle output
void outputResult(const vector<int> &result)
{
    // Output handling logic goes here
    // This is just a placeholder example
    cout << "Result: ";
    for (int i = 0; i < result.size(); ++i)
    {
        cout << result[i] << " "; // Example output
    }
    cout << endl;
}

int main()
{
    // Get input
    vector<int> nums = getInput();

    // Solve the problem
    vector<int> result = solveProblem(nums);

    // Output the result
    outputResult(result);

    return 0;
}