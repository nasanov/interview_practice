## Question
Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is _abcde_ and B is _cdeab_, return true. If A is _abc_ and B is _acb_, return false.

## Approach
  _A_ string being a shifted representation of _B_ means that at certain position _pos_ two parts of the string can be switched places and a result will be _B_ string. Algorithm will start at the position 0(meaning that strings are equal) and continue to increase current position by one every step. If condition is satisfied - return True. If reached end of the function - 0.
