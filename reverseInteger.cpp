// Reverse integer eg 456 --> 654

#include <iostream>
using namespace std;

int main()
{
    int num = 456, rem, ans = 0;
    while (num != 0)
    {
        rem = num % 10;
        ans = ans * 10 + rem;
        num = num / 10;
    }

    cout << ans;

    return 0;
}
