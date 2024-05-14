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

int main()
{
    vector<int> nums = {1, 2, 3, 4, 5};
    vector<int> result = solveProblem(nums);

    cout << " Result ";
    for (int num : result)
    {
        cout << num << " ";
    }

    return 0;
}