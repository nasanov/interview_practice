def ternarySearchRec(arr, el):
  def rec(l, r):
    if r < l:
      return -1

    m1 = l + (r - l) // 3
    m2 = r - (r - l) // 3
    if arr[m1] is el:
      return m1
    elif arr[m2] is el:
      return m2

    if el < arr[m1]:
      return rec(l, m1 - 1)
    elif el > arr[m2]:
      return rec(m2 + 1, r)
    else:
      return rec(m1 + 1, m2 - 1)

  return rec(0, len(arr) - 1)

def ternarySearchIter(arr, el):
  l, r = 0, len(arr) - 1

  while (r >= l):
    m1 = l + (r - l) // 3
    m2 = r - (r - l) // 3
    if arr[m1] is el:
      return m1
    elif arr[m2] is el:
      return m2

    if el < arr[m1]:
      r = m1 -1
    elif el > arr[m2]:
      l = m2 + 1
    else:
      l, r = m1 + 1, m2 - 1
  return -1

# should find
print(ternarySearchRec([1, 2, 3], 2))
print(ternarySearchIter([1, 2, 3], 2))
# should not be found
print(ternarySearchRec([1, 2, 3], 4))
print(ternarySearchIter([1, 2, 3], 4))
