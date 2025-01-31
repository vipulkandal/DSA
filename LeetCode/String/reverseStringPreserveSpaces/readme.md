# Reverse String While Preserving Spaces

## Problem Statement

Given a string `s`, reverse **only** the non-space characters while keeping all spaces in their original positions.

## Constraints

- `1 ≤ s.length ≤ 10^5`
- `s` consists of uppercase and lowercase English letters, digits, and spaces.
- `s` **does not** contain leading or trailing spaces.
- There is **at least one** non-space character in `s`.

## Examples

### Example 1

**Input:**

```plaintext
s = "hello world"
```

**Output:**

```plaintext
"dlrow olleh"
```

### Example 2

**Input:**

```plaintext
s = "abc d e fgh"
```

**Output:**

```plaintext
"hgf d e cba"
```

### Example 3

**Input:**

```plaintext
s = "123 4 5"
```

**Output:**

```plaintext
"543 2 1"
```

## Solution Approach

### Approach 1: Using Extra Space (O(n) Space Complexity)

1. Extract all non-space characters from the string and store them in an array.
2. Reverse this array.
3. Iterate through the original string and reconstruct it by placing spaces at their original positions while inserting reversed characters in place of the non-space characters.
4. This approach runs in **O(n) time complexity** but requires **O(n) extra space**.

### Approach 2: Two-Pointer Technique (Optimized O(1) Space Complexity)

1. Use two pointers: one at the start and one at the end of the string.
2. Move both pointers toward the center while skipping spaces.
3. Swap non-space characters and maintain the spaces in their original positions.
4. This approach achieves an **O(n) time complexity** and **O(1) space complexity**, making it the optimal solution.

Both solutions effectively solve the problem, but the two-pointer approach is preferred due to its lower space complexity.
