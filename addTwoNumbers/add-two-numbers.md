# Add two numbers

## Problem type

- Linked list
- Arithmetic

## Problem page

https://leetcode.com/problems/add-two-numbers/

## Summary

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Notes

- The two numbers are singly-linked lists
- They represent an integer, in reverse order
- Your end goal isn't _adding the two numbers_, it's creating a linked list representing the operation result.
- The test cases include a number that is out of bounds for `int` type.

Approaches:

1. Convert to numbers, add, and reconvert to list

The naive approach is to convert the two lists back to numbers, perform the math, and then reconvert the result back to a linked list.
This creates extra complexity around the list conversion and number types.

2. Direct math, integer operations on each digit.

This will be by far the fastest and simplest method. Look at the example diagrams and see how you would create that result using only each digit in sequence.
