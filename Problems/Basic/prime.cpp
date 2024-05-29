// Prime number

#include <iostream>
using namespace std;

int main()
{
    int num = 189;

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            cout << "Not Prime";
            return 0;
        }
    }
    cout << "prime";

    return 0;
}
