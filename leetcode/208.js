/**
 * 208. Implement Trie (Prefix Tree)
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");   
 * trie.search("app");     // returns true
 * Note:
 * 
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 * 
 * Complexity:
 * Space: O(N * K)
 * Time:
 *    Insert: O(K)
 *    Search: O(K)
 * Where:
 *    N is the amount of words
 *    K is the length of the word
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Node()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;

    for (const ch of word) {
        const code = _toCharCode(ch);

        if (!current.children[code]) {
            current.children[code] = new Node()
        }
        current = current.children[code];
    }
    current.eow = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.match(word, false);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.match(prefix, true);
};

Trie.prototype.match = function (word, isPrefix) {
    let i;
    let current = this.root;
    
    for (const ch of word) {
        const code = _toCharCode(ch);
        
        if (!current.children[code])
            return false;
        current = current.children[code];
    }
    return isPrefix ? true : current.eow;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const Node = function () {
  this.children = [];  
  this.eow = false;
};

function _toCharCode(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}
