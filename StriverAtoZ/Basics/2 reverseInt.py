# ==================================================
# REVERSE DIGITS OF A NUMBER
# ==================================================


# ------------------------------
# PROBLEM STATEMENT
# ------------------------------
"""
Given an integer N, return the reverse of the given number.

Note:
If a number has trailing zeros, then its reverse will NOT include them.
Example:
Reverse of 10400 is 401 (not 00401)
"""


# ------------------------------
# EXAMPLES
# ------------------------------
"""
Input:  N = 1234
Output: 4321

Input:  N = 100
Output: 1

Input:  N = 10400
Output: 401

Input:  N = -789
Output: 987

Input:  N = 0
Output: 0
"""


# ------------------------------
# HINT
# ------------------------------
"""
- Extract the last digit using % 10
- Remove the last digit using // 10
- Build the reversed number digit by digit
"""


# ------------------------------
# APPROACH
# ------------------------------
"""
- Convert the number to positive using abs()
- Initialize a variable to store the reversed number
- Extract digits one by one from the right
- Append each digit to the reversed number
"""


# ------------------------------
# ALGORITHM
# ------------------------------
"""
1. Take absolute value of N
2. Initialize reversedNum = 0
3. While N > 0:
     - lastDigit = N % 10
     - reversedNum = reversedNum * 10 + lastDigit
     - N = N // 10
4. Return reversedNum
"""


# ------------------------------
# TIME & SPACE COMPLEXITY
# ------------------------------
"""
Time Complexity:  O(d)  where d = number of digits
Space Complexity: O(1)
"""


# ------------------------------
# SOLUTION
# ------------------------------
def reverseInt(num):
    # Remove negative sign
    num = abs(num)

    reversedNum = 0

    # Reverse digits using while loop
    while num > 0:
        lastDigit = num % 10
        reversedNum = reversedNum * 10 + lastDigit
        num //= 10

    return reversedNum


# ------------------------------
# EXAMPLE USAGE
# ------------------------------
print("Reversed number:", reverseInt(1234))
print("Reversed number:", reverseInt(10400))
print("Reversed number:", reverseInt(-789))

"""
    Follow-up ques
        In case of -ve value we want to have -ve reverse value
            sign = -1 if num < 0 else 1   # store sign
            return sign * reversedNum
"""
