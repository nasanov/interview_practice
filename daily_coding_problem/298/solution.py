from typing import List

"""
N - number of apple trees in orchard. In other words - orchard's length
M - number of distinct apple types
"""

class AppleSet:
  """
  Represent an apple set
  """
  def __init__(self, orchard):
    self.apple_types = dict()

    if orchard is not None:
      for apple in orchard:
        self.add_apple(apple)
  
  def add_apple(self, apple: int):
    if apple not in self.apple_types:
      self.apple_types[apple] = 0
    self.apple_types[apple] += 1
  
  def remove_apple(self, apple: int):
    self.apple_types[apple] -= 1
    if self.apple_types[apple] == 0:
      del self.apple_types[apple]

  def apple_count(self):
    return sum(self.apple_types[atype] for atype in self.apple_types)

  def __len__(self):
    return len(self.apple_types.keys())
  
  def __deepcopy__(self, memo):
    print(memo)

def minimize_apple_set(apple_set, orchard):
  """
  Minimizes apple set to only two distinct apple types

  Time: O(N) - recursively goes over every apple tree in orchard
  Space: O(log(N)) - similar to a binary search will have a most log(N) recursion's depth
  """
  if len(apple_set) == 2:
    return apple_set.apple_count()

  if orchard is None or len(orchard) == 0:
    return 0
  
  set1 = AppleSet(orchard[1:])
  option1 = minimize_apple_set(set1, orchard[1:])

  set2 = AppleSet(orchard[:-1])
  option2 = minimize_apple_set(set2, orchard[:-1])

  return max(option1, option2)

def get_longest_portion(orchard: List[int]) -> int:
  """
  Returns the longest portion
  """
  return minimize_apple_set(AppleSet(orchard), orchard)

if __name__ == "__main__":
  testcase1 = {
    'input': [2, 1, 2, 3, 3, 1, 3, 5],
    'expected': 4,
  }
  testcase2 = {
    'input': [2, 1, 2, 2, 2, 1, 2, 1],
    'expected': 8,
  }
  testcase3 = {
    'input': [1, 2, 3, 4],
    'expected': 2,
  }
  testcases = [testcase1, testcase2, testcase3]

  for (idx, case) in enumerate(testcases):
    expected = case['expected']
    actual = get_longest_portion(case['input'])
    try:
      assert actual == expected, '{} shoud equal {}'.format(actual, expected)
    except AssertionError:
      print('----------------------------')
      print('Error running testcase {}: {}'.format(idx, case))
      raise
