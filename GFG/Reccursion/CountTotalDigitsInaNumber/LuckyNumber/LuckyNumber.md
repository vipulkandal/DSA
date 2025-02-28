### Lucky Numbers

Difficulty: **Medium**

**Lucky numbers** are subset of integers. Process of arriving at lucky numbers is:  
Take the set of integers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,……  
First, delete every **second** number, we get following reduced set.  
1, 3, 5, 7, 9, 11, 13, 15, 17, 19,…………  
Now, delete every **third** number, we get  
1, 3, 7, 9, 13, 15, 19,….….  
Continue this process indefinitely……  
Any number that does **NOT** get deleted due to above process is called “**lucky**”.

You are given a number **N**, you need to tell whether the number is lucky or not. If the number is lucky return 1 otherwise 0.

**Example 1:**

**Input:** N = 5
**Output:** 0 **Explanation:** 5 is not a lucky number as it gets  
deleted in the second iteration.

**Example 2:**

**Input:** N = 19
**Output:** 1 **Explanation:** 19 is a lucky number because  
it does not get deleted throughout the process.

**Your Task:**  
You don't need to read input or print anything. You only need to complete the function **isLucky()** that takes N as parameter and returns either False if the N is not lucky else True.

**Constraints:**  
1 <= N <= 105

### **---------------Hint---------------`**

### **Intuition Behind `position -= Math.floor(position / step);`**

The intuition behind this formula comes from understanding **how numbers shift** when eliminations occur without explicitly removing them.

#### **Key Idea: Position Updates Without an Array**

Instead of physically removing numbers from a list (which would be inefficient for large `N`), we mathematically adjust the **position** of `N` based on the number of elements that are removed before it.

---

### **Core Concept: "Shifting Down" After Each Elimination**

1.  **Every `step`th element is removed at each stage** (starting with removing every 2nd element, then every 3rd, etc.).
2.  **Numbers beyond each removed element shift left** (they "move up" in the sequence).
3.  **Instead of tracking all elements, we directly adjust `position`** by accounting for how many elements have been removed before it.

---

### **Why `Math.floor(position / step)`?**

At step `k`, every `k`th number is deleted. That means:

- In a sequence of numbers up to `position`, about **`position / k` numbers have been removed**.
- We use `Math.floor()` because only whole numbers can be removed.

So, we **subtract this count** from `position` to simulate the shift caused by removals.

---

### **Visual Example**

Consider `N = 19`:

#### **Step 1 (Remove Every 2nd Number)**

Original:  
`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...]`

After Removing Every 2nd Number:  
`[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, ...]`

- **Before removal, `19` was at position `19`**.
- **Now, it shifts left** due to removed numbers.
- `Math.floor(19 / 2) = 9` numbers were removed before `19`.
- New **position = 19 - 9 = 10**.

---

#### **Step 2 (Remove Every 3rd Number)**

Sequence now:  
`[1, 3, 7, 9, 13, 15, 19, 21, ...]`

- **Before removal, `19` was at position `10`**.
- `Math.floor(10 / 3) = 3` numbers removed before `19`.
- New **position = 10 - 3 = 7**.

---

#### **Step 3 (Remove Every 4th Number)**

Sequence now:  
`[1, 3, 7, 9, 13, 15, 19, ...]`

- **Before removal, `19` was at position `7`**.
- `Math.floor(7 / 4) = 1` number removed before `19`.
- New **position = 7 - 1 = 6**.

---

#### **Step 4 (Remove Every 5th Number)**

Sequence now:  
`[1, 3, 7, 9, 13, 15, 19, ...]`

- **Before removal, `19` was at position `6`**.
- `Math.floor(6 / 5) = 1` number removed before `19`.
- New **position = 6 - 1 = 5**.

---

#### **Final Steps**

1.  At `step = 6`, position shifts to 5.
2.  At `step = 7`, position `5 < 7`, so `19` is **lucky**.

---

### **Why This Works**

1.  **Each round eliminates numbers at fixed intervals**.
2.  **Instead of removing elements, we track how much the position shifts**.
3.  **If `position % step == 0` at any point, `N` gets eliminated**.

This trick lets us determine **if `N` survives the eliminations** without actually modifying an array.

---

### **Intuition Summary**

✅ Instead of removing elements, we track how `N` shifts in the sequence.  
✅ `Math.floor(position / step)` counts how many numbers are removed before `position`.  
✅ We **subtract this count** to adjust `position` as if the removals happened.  
✅ If `position % step == 0`, `N` is eliminated; otherwise, it survives and is lucky.
