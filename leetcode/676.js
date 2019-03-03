/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.dict = {};
  this.aplhabetSize = 26;
};

/**
* Build a dictionary through a list of words 
* @param {string[]} dict
* @return {void}
*/
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
      const sum = getSum(word);
      if (!this.dict[sum]) this.dict[sum] = [];
      this.dict[sum].push(word);
  }
};

/**
* Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
* @param {string} word
* @return {boolean}
*/
MagicDictionary.prototype.search = function(word) {
  const sum = getSum(word);
  for (let i = 1; i < this.aplhabetSize; i++) {
      const found = this.try(word, sum, +i) || this.try(word, sum, -i);
      if (found) return true;
  }
  return false;
};

  
MagicDictionary.prototype.try = function(word, sum, idx) {
  let entries = this.dict[sum + idx] || [];

  return entries
      .filter((entry) => isOneCharDiff(word, entry))
      .length > 0;
}
  
/** 
* Your MagicDictionary object will be instantiated and called as such:
* var obj = Object.create(MagicDictionary).createNew()
* obj.buildDict(dict)
* var param_2 = obj.search(word)
*/


function getSum(word) {
  return word.split('').reduce((a, v) => a + v.charCodeAt(), 0);
}

function isOneCharDiff(m1, m2) {
  let diff1 = 0;
  if (m1.length !== m2.length) return 0;
  for (let i = 0; i < m1.length; i++) {
      if (m1[i] != m2[i])
          diff1++;
  }
  return diff1 > 0 && diff1 < 2;
}
