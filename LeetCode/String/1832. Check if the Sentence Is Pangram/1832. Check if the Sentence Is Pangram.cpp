// 1832. Check if the Sentence Is Pangram

#include <iostream>
#include <vector>

using namespace std;
// Create Vector 0-25; will represent a-z (Smaller case only)
// Iterate the string
//      eg: if 'a' is there then make value of  index of (0 = 'a', 1 = 'b', 25='z') == 1
// Iterate vector if any of the index is 0 then return false otherwise true

bool checkIfPangram(string sentence)
{

    vector<int> alphabetIndex(26, 0); // 0 = 'a', 1 = 'b', 25='z'

    for (int i = 0; i < sentence.size(); i++)
    {
        // Calculate index based on ASCII value
        int index = sentence[i] - 'a';
        alphabetIndex[index] = 1; // Mark the letter as present
    }

    // Print the alphabetIndex vector
    for (int i = 0; i < alphabetIndex.size(); i++)
    {
        if (alphabetIndex[i] == 0)
            return false;
    }

    return true;
}
int main()
{
    string sentence = "thequickbrownfoxjumpsoverthelazydog";
    cout << (checkIfPangram(sentence) ? "True" : "False") << endl;

    return 0;
}
