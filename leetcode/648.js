/**
 * Task: 648. Replace Words
 * 
 * Description:
 * In English, we have a concept called root, which can be followed by some other words to form another
 * longer word - let's call this word successor. For example, the root an, followed by other, which
 * can form another word another.
 * 
 * Now, given a dictionary consisting of many roots and a sentence. You need to replace all
 * the successor in the sentence with the root forming it. If a successor has many roots can form it,
 * replace it with the root with the shortest length.
 * 
 * You need to output the sentence after the replacement.
 * 
 * Example 1:
 * 
 * Input: dict = ["cat", "bat", "rat"]
 * sentence = "the cattle was rattled by the battery"
 * Output: "the cat was rat by the bat"
 *  
 * 
 * Note:
 * 
 * The input will only have lower-case letters.
 * 1 <= dict words number <= 1000
 * 1 <= sentence words number <= 1000
 * 1 <= root length <= 100
 * 1 <= sentence words length <= 1000
 * 
 * Complexity:
 * Time: O(D * K + Wc * Wl)
 * Space: O(A * K * D)
 * Where:
 *  D - length of dictionary(dict parameter)
 *  K - average key length
 *  Wc - words count in sentence
 *  Wl - average length of the word
 *  A - alphabet size
 * 
 * Alphabet is relatively small(only lowercase english = 26) so it can be skipped.
 * After that:
 * Time: O(D * k + Wc * Wl)
 * Space: O(K * D)
*/

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const trie = new Trie();
  for (const root of dict) { // D
      trie.insert(root);  // dict_len * key_len
  }
  const res = [];
  for (const word of sentence.split(' ')) { // word_count
      const match = trie.match(word); // word_length * word_count 
      res.push(match ? match : word);
  }
  return res.join(' ');
};

class Node {
  constructor() {
      this.children = [];
      this.eow = false;
  }
}

class Trie {
  constructor() {
      this.root = new Node()
  }
  
  _toCharCode(char) {
      return char.charCodeAt() - 'a'.charCodeAt();
  }
  
  insert(word) {
      let current = this.root;

      for (const ch of word) {
          const code = this._toCharCode(ch);
          
          if (!current.children[code]) {
              current.children[code] = new Node()
          }
          current = current.children[code];
      }
      current.eow = true;
  }
  
  // returns shortest match for word starting from 1st character
  match(word) {
      let i;
      let current = this.root;

      for (i = 0; i < word.length; i++) {
          const ch = word[i];
          const code = this._toCharCode(ch);
          if (!current.children[code] || current.eow) {
              break ;
          }
          current = current.children[code];
      }
      return current.eow ? word.slice(0, i) : '';
  }
}
