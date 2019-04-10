from enum import Enum

class Instruction(Enum):
  UP = 1
  RIGHT = 2
  DOWN = 3
  LEFT = 4
  OK = 5

  def decode(instruction):
    instruction = instruction.value
    arrInst = [
      (-1, 0),
      (0, 1),
      (1, 0),
      (0, -1),
    ]
    return arrInst[instruction - 1]

class Remote:
  alphabet = 'abcdefghijklmnoprstuvwxyz'

  def __init__(self, width):
    self.width = width
    self.reset()

  def reset(self):
    self.position = (0, 0)

  def getInstructions(self, word):
    instructions = list()
    for ch in word:
      desiredIdx = Remote.alphabet.index(ch)
      if desiredIdx == -1:
        raise Exception(f'Incorrect character {ch}!')
      row, col = (desiredIdx // self.width, desiredIdx % self.width)
      currRow, currCol = (self.position)
      delta = currRow - row
      action = Instruction.UP if delta > 0 else Instruction.DOWN 
      instructions += [action] * abs(delta)
      delta = currCol - col
      action = Instruction.LEFT if delta > 0 else Instruction.RIGHT
      instructions += [action] * abs(delta)
      instructions.append(Instruction.OK)
      self.position = (row, col)
    return instructions
  
  def execute(self, instructions):
    for i in instructions:
      row, col = self.position
      if i == Instruction.OK:
        print(Remote.alphabet[row * self.width + col])
      else:
        # print(i)
        decoded = Instruction.decode(i)
        row += decoded[0]
        col += decoded[1]
        if (row * self.width + col > len(Remote.alphabet)
            or row < 0 or row >= self.width or col < 0 or col >= self.width):
          print(row, col)
          raise Exception('Out of boundaries')
      self.position = (row, col)

r = Remote(5)
i = r.getInstructions('ivan')
r.reset()
r.execute(i)