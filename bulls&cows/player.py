from itertools import permutations, product
from random import shuffle
from getHint import getScore


class Player:
  def __init__(self, alphabet, size):
    self.alphabet = alphabet
    self.size = size
    self.found = 0
    self.reset()

  def reset(self):
    self.choices = list(product(self.alphabet, repeat=self.size))
    shuffle(self.choices)
  
  def play(self):
    if self.found:
      print('I\'ve found the result already. Call reset()')
    elif len(self.choices) == 0:
      print('I have no choices left to pick')
    else:
      return ''.join(self.choices[0])

  def setScore(self, score):
    bulls, _ = score
    self.found = bulls == self.size
    ans = self.choices[0]
    if self.found:
      print(f'Got it. {ans}')
    self.choices = [c for c in self.choices if getScore(ans, c) == score]
