/**
 * Task:
 * Serialization is the process of converting a data structure or object into a sequence of bits so
 * that it can be stored in a file or memory buffer, or transmitted across a network connection
 * link to be reconstructed later in the same or another computer environment.

 * Design an algorithm to serialize and deserialize a binary search tree. There is no restriction
 * on how your serialization/deserialization algorithm should work. You just need to ensure that
 * a binary search tree can be serialized to a string and this string can be deserialized
 * to the original tree structure.

 * The encoded string should be as compact as possible.

 * Note: Do not use class member/global/static variables to store states. Your serialize
 * and deserialize algorithms should be stateless.
 * 
 * 
 * Complexity:
 * Time: O(N)
 * Space: O(N)
 * Where N is amount of node
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = serializeRec(root, []).join('\0');
  return res;
};

function serializeRec(root, result) {
  if (root) {
      result.push(root.val);
      serializeRec(root.left, result);
      serializeRec(root.right, result);
  } else {
      result.push(-1);
  }
  return result;
}

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  let i = -1;
  const array = data.split('\0');

  function deserializeRec() {
      let node = null;
      i++;
      if (i < array.length) {
          const n = +array[i];
          if (n >= 0) {
              node = new TreeNode(n);
              node.left = deserializeRec();
              node.right = deserializeRec();
          }
      }
      return node;
  }
  
  return deserializeRec();
};



/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/