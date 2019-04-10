from player import Player
from getHint import getScore

print('Bull&Cows the game')
p = Player('0123456789', 3)

secret = '221'

# print(p.choices)
while True:
  guess = p.play()
  print(f'Guessed {guess}')
  if guess:
    score = getScore(secret, guess)
    p.setScore(score)
  else:
    break