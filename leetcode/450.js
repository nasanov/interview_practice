/**
 * Task description.
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
 * Note: Time complexity should be O(height of tree).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 * Time: O(K)
 * Space: O(1) No extra space
 * Where K is depth of the tree
 */
var deleteNode = function(root, key) {
  if (!root) return root;
  if (root.val < key) {
      root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
      root.left = deleteNode(root.left, key)
  } else {
      if (!root.left) {
          return root.right;
      } else if (!root.right) {
          return root.left;
      }
      const min = minVal(root.right);
      swap(root, min);
      root.right = deleteNode(root.right, key);
  }
  return root;
};

function minVal(root) {
  while (root.left) {
      root = root.left;
  }
  return root;
}

function swap(node1, node2) {
  let tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
}
