def isSameString(s1, s2):
  s1Len = len(s1)
  s2Len = len(s2)
  if s1Len != s2Len:
    return False
  for pos in range(0, s1Len):
    if (s1[pos:] + s1[:pos] == s2):
      return True
  return False

print(isSameString('abcde', 'cdeab'))
print(isSameString('abc', 'acb'))