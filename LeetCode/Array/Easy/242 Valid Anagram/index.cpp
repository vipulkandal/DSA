#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

bool isAnagram(string a, string b)
{
    if (a.length() != b.length())
        return false;

    // map to store the count of characters
    unordered_map<char, int> occurrence;
    for (int i = 0; i < a.length(); i++)
    {
        occurrence[a[i]]++;
    }
    for (int i = 0; i < b.length(); i++)
    {
        occurrence[b[i]]--;
    }

    for (auto x : occurrence)
    {
        if (x.second != 0)
        {
            return false; // If any count is not zero, strings are not anagrams
        }
    }
}

return true;
}

int main()
{
    string a = "anagram";
    string b = "nagaram";
    cout << isAnagram(a, b);
    return 0;
}