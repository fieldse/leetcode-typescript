# Remove element

https://leetcode.com/studyplan/top-interview-150/

## Summary

Remove occurences of value from array in-place.

## Topics

- arrays
- substitution
- two pointers

## Description

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

## Criteria

```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
```

## Notes

This one is deceptive: slightly tricky, though it appears simple.

- we replace the elements _in place_
- only the first `k` characters count, the rest are ignored
- each integer size is between 0-50

Notes on process:

- you do not need to sort the integers at the beginning, just stuff them into the first `k` characters
- The maximum range is 50, so a '99' would be beyond the scope
- time optimization: avoid iterating through the list multiple times
- We iterate through the list _once_ to replace the bad integers.

Improvements:

- Instead of doing a 'sort' at the end and the '99' hack, we should just replace the first `k` characters with the "valid" integers.
