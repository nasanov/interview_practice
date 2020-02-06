def connect_houses(pipes, houses, total):
  if not houses:
    return total

  min_cost = None
  not_connected_houses = pipes.keys() - houses
  for start in not_connected_houses:
    houses_to_connect_from_start = pipes[start].keys() & houses
    for next_house in houses_to_connect_from_start:
      cost = connect_houses(
        pipes,
        houses - {next_house},
        total + pipes[start][next_house])
      if min_cost is None or cost < min_cost:
        min_cost = cost

  return min_cost

get_lowest_cost = lambda pipes: connect_houses(pipes, pipes.keys() - {'plant'}, 0)
solution = get_lowest_cost

testcase1 = {
'input': {
  'pipes': {
    'plant': {'A': 1, 'B': 5, 'C': 20},
    'A': {'C': 15},
    'B': {'C': 10},
    'C': {}
    },
  },
  'expected': 15
}
testcases = [testcase1]
