def getScore(secret: str, guess: str) -> str:
  hash = dict()
  bulls, cows = 0, 0
  for idx, ch in enumerate(secret):
    if secret[idx] == guess[idx]:
      bulls += 1
    elif ch not in hash:
      hash[ch] = 1
    else:
      hash[ch] += 1
  for idx, ch in enumerate(guess):
    if secret[idx] != guess[idx]:
      if ch in hash and hash[ch] > 0:
        cows += 1
        hash[ch] -= 1
  return (bulls, cows)