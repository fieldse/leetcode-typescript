# Greatest common divisor of two strings

## Summary

Find largest matching divisor of two strings.

## Topics

- strings
- sliding window pattern

## Problem page

https://leetcode.com/problems/greatest-common-divisor-of-strings

## Description

For two strings s and t, we say "t divides s" if and only if `s = t + t + t + ... + t + t` (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

## Notes

- "Divisor" is a tricky word: it doesn't mean the largest common substring.
- We're looking for the largest substring that _equally divides_ both strings into identical parts.
- Therefore, "AB" is the largest divisor of "ABAB" and "ABABAB", but "ABAB" is not a _divisor_ of the latter. (ABAB|AB) - not equal parts.
