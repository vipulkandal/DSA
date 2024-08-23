#include <bits/stdc++.h>
using namespace std;

int findUniqueElement(vector<int> &numbers)
{

    // Size of the array:
    int arraySize = numbers.size();

    // Declare the hashmap.
    // And hash the given array:
    map<int, int> frequencyMap;
    for (int i = 0; i < arraySize; i++)
    {
        frequencyMap[numbers[i]]++;
    }

    // Find the single element and return the answer:
    for (auto element : frequencyMap)
    {
        if (element.second == 1)
            return element.first;
    }

    // This line will never execute
    // if the array contains a single unique element.
    return -1;
}

int main()
{
    vector<int> numbers = {4, 1, 2, 1, 2};
    int uniqueElement = findUniqueElement(numbers);
    cout << "The unique element is: " << uniqueElement << endl;
    return 0;
}
