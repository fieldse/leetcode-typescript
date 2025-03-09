# Is Subsequence

https://leetcode.com/problems/is-subsequence

## Summary

Validate if a given string is a subsequence of a larger string.

## Topics

- strings
- two pointers

## Description

```
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

```

## Notes

This is basically a two pointers problem: fast and slow pointer.
Approach:

- We iterate across the characters of `t`, matching vs characters of `s`. If the characters match, our `s` counter advances.
- If we reach the end of `s` by the end of `t`, our word is a substring.
