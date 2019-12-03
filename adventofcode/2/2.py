from inspect import getsource
get_lambda_name = lambda l: getsource(l).split('=')[0].strip()

add = lambda a, b: a + b
mul = lambda a, b: a * b

def get_op(n):
  ops = [add, mul]
  n -= 1
  if n < 0 or n >= len(ops):
    raise Exception('Invalid operation number %d' % n)
  return ops[n]

def preform_operation(instructions, index, op):
  a_idx = instructions[index + 1]
  b_idx = instructions[index + 2]
  result_idx = instructions[index + 3]
  print('Performing op %s on indexes %d and %d. Putting result to index %d'
    % (get_lambda_name(op), a_idx, b_idx, result_idx))
  a = instructions[a_idx]
  b = instructions[b_idx]
  instructions[result_idx] = op(a, b)

def program_alarm(instructions):
  index = 0
  while index < len(instructions):
    op_number = instructions[index]
    if op_number is 99:
      print('Halt at index %d' % index)
      break
    op = get_op(op_number)
    preform_operation(instructions, index, op)
    index += 4
  return instructions

_input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,9,19,23,1,23,5,27,2,27,10,31,1,6,31,35,1,6,35,
  39,2,9,39,43,1,6,43,47,1,47,5,51,1,51,13,55,1,55,13,59,1,59,5,63,2,63,6,67,1,5,67,71,1,71,13,75,1,
  10,75,79,2,79,6,83,2,9,83,87,1,5,87,91,1,91,5,95,2,9,95,99,1,6,99,103,1,9,103,107,2,9,107,111,1,111,
  6,115,2,9,115,119,1,119,6,123,1,123,9,127,2,127,13,131,1,131,9,135,1,10,135,139,2,139,10,143,1,143,
  5,147,2,147,6,151,1,151,5,155,1,2,155,159,1,6,159,0,99,2,0,14,0]
restored_input = program_alarm(_input)
print(restored_input[0])