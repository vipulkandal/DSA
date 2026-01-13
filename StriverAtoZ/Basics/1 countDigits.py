# ==================================================
# COUNT NUMBER OF DIGITS
# ==================================================


# ------------------------------
# PROBLEM STATEMENT
# ------------------------------
"""
Given an integer N, return the number of digits in N.
"""


# ------------------------------
# EXAMPLES
# ------------------------------
"""
Input:  N = 1234
Output: 4

Input:  N = 7
Output: 1

Input:  N = 100
Output: 3

Input:  N = 0
Output: 1

Input:  N = -456
Output: 3
"""


# ------------------------------
# HINT
# ------------------------------
"""
- Ignore the negative sign using abs()
- Use integer division (// 10) to remove the last digit
- The loop runs once per digit
"""


# ------------------------------
# APPROACH
# ------------------------------
"""
- Convert the number to positive
- Handle zero as a special case
- Count digits by repeatedly dividing by 10
"""


# ------------------------------
# ALGORITHM
# ------------------------------
"""
1. Take absolute value of N
2. If N == 0, return 1
3. Initialize count = 0
4. While N > 0:
     - Increment count
     - N = N // 10
5. Return count
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
def countDigits(num):
    # Remove negative sign if present
    num = abs(num)

    # Special case: zero has one digit
    if num == 0:
        return 1

    count = 0

    # Count digits using while loop
    while num > 0:
        count += 1
        num //= 10

    return count


# ------------------------------
# EXAMPLE USAGE
# ------------------------------
print("Digit count is:", countDigits(1234))
print("Digit count is:", countDigits(0))
print("Digit count is:", countDigits(-987))
