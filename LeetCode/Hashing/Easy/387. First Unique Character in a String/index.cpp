#include <iostream>
#include <unordered_map>
using namespace std;

/*
Indexes:  0  1  2  3  4  5  6  7  8  9 10 11
String :  l  o  v  e  l  e  e  t  c  o  d  e


Step 1: Counting Frequencies
Count Map after first loop:
'l': 2
'o': 2
'v': 1
'e': 4
't': 1
'c': 1
'd': 1

Step 2: Finding the First Unique Character by Index

1. Index 0: 'l' (count = 2) -> Continue
2. Index 1: 'o' (count = 2) -> Continue
3. Index 2: 'v' (count = 1) -> Found, return 2

TC: O(n)
SC: O(n) because we are using hashMaps
*/

int firstUniqueCharacter(string str)
{
    unordered_map<char, int> count;
    for (int i = 0; i < str.length(); i++)
    {
        count[str[i]]++;
    }

    for (int k = 0; k < str.length(); k++)
    {
        if (count[str[k]] == 1)
        {
            return k;
        }
    }

    return -1;
}
int main()
{
    string s = "loveleetcode";
    cout << firstUniqueCharacter(s);

    return 0;
}