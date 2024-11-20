/*
 * Write a program to sort the string
 * Assume string will always be in lowercase
 */

#include <bits/stdc++.h>
using namespace std;

int main()
{
    string str = "worldhello";
    cout << "Unsorted string: " << str << endl;
    int freq[26] = {0};

    // Count the frequency of each character
    for (char c : str)
    {
        freq[c - 'a']++;
    }

    // Build the sorted string
    string sorted = "";
    for (int i = 0; i < 26; i++)
    {
        while (freq[i]-- > 0) // freq[i] minus minus i.e decrement
        {
            sorted += i + 'a';
        }
    }

    cout << "Sorted string: " << sorted << endl;

    return 0;
}