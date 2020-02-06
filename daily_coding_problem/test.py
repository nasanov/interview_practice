_299 = __import__('299.solution')

modules_to_test = [_299]

def test_module(module):
  solution = module.solution

  testcases = solution.testcases
  solution_fn = solution.solution
  print('----------------------------')
  print('Testing module {}'.format(module.__name__))
  for (idx, case) in enumerate(testcases):
    expected = case['expected']
    actual = solution_fn(**case['input'])
    try:
      assert actual == expected, '{} shoud equal {}'.format(actual, expected)
      print('Case {} passed'.format(idx))
    except AssertionError:
      print('Error running testcase {}: {}'.format(idx, case))
      raise
  print('Done')
  print('----------------------------')

if __name__ == "__main__":
  for module in modules_to_test:
    test_module(module)
