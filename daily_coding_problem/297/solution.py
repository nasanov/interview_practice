from typing import Dict, List, Set

"""
N - number of customers
M - average number of favorite drink per customer
"""

def build_drinks_dict(preferences: Dict[int, List[int]]) -> Dict[int, Set[int]]:
  """
  Builds drinks dictionary where keys are drinks' numbers
  and values are customers for whom this drink is favorite.

  Time: O(N * M) - iterates over every cusomer and every drink
  Space: O(M) - creates new dictionary with size M
  """
  drinks_dict = dict()

  for customer_index in preferences:
    customer_favorite_drinks = preferences[customer_index]
    for drink in customer_favorite_drinks:
      if drink not in drinks_dict:
        drinks_dict[drink] = set()
      drinks_dict[drink].add(customer_index)
  
  return drinks_dict

def min_recipie_book(
  drinks: Dict[int, Set[int]],
  recipie_book: Set[int],
  customers_left: Set[int],
) -> Set[int]:
  """
  Returns minimum recipie book possible

  Time: O(M^N) - build a M-ary tree with depth N
  Space: O(N) - at most recursion will go N steps deep
  """
  if not customers_left:
    return recipie_book

  best_option = set(drinks.keys())
  drinks_left = set(drinks.keys()) - recipie_book
  for drink in drinks_left:
    option = min_recipie_book(
      drinks,
      recipie_book | {drink},
      customers_left - drinks[drink],
    )
    if len(option) < len(best_option):
      best_option = option

  return best_option


def lazy_recipie_book(preferences: Dict[int, List[int]]) -> Set[int]:
  """
  Main entrance point
  """
  drinks_dict = build_drinks_dict(preferences)
  recipie_book = set()
  customers_left = set(preferences.keys())

  return min_recipie_book(
    drinks_dict,
    recipie_book,
    customers_left,
  )

if __name__ == "__main__":
  testcase1 = {
    'preferences': {
      0: [0, 1, 3, 6],
      1: [1, 4, 7],
      2: [2, 4, 7, 5],
      3: [3, 2, 5],
      4: [5, 8],
    },
    'expected': {1, 5},
  }
  testcases = [testcase1]

  for (idx, case) in enumerate(testcases):
    expected = case['expected']
    actual = lazy_recipie_book(case['preferences'])
    try:
      assert actual == expected, '{} shoud equal {}'.format(actual, expected)
    except AssertionError as e:
      print('----------------------------')
      print('Error running testcase {}: {}'.format(idx, case))
      raise
