/**
 * This one does not work for JS on leetcode. So there is some preparation involved.
 */

 //#region HELPER FUNCTIONS
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

 function deserialize(array) {
  let i = -1;

  function deserializeRec() {
      let node = null;
      i++;
      if (i < array.length) {
          const n = array[i] ? +array[i] : null;
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

function subtreeRec(root1, root2) {
  if (!root1 || !root2) return [];
  let res = [];
  if (root1.val === root2.val) {
    res.push(root1.val);
    const left = subtreeRec(root1.left, root2.left);
    const right = subtreeRec(root1.right, root2.right);
    if (left.length > right.length) {
      res = res.concat(left);
    } else {
      res = res.concat(right);
    }
  }
  return res;
}

//#endregion HELPER FUNCTIONS

function findBiggestSubTree(group) {
  let biggestSubTree = null;
  for (let i = 1; i < group.length; i++) {
    const tmp = subtreeRec(group[i - 1], group[i]);
    if (!biggestSubTree) biggestSubTree = tmp;
    const newSubTree = [];
    for (let j = 0; j < biggestSubTree.length && j < tmp.length; j++) {
      if (biggestSubTree[j] === tmp[j]) {
        newSubTree.push(biggestSubTree[j]);
      } else {
        break;
      }
    }
    biggestSubTree = newSubTree;
  }
  return biggestSubTree;
}

var findDuplicateSubtrees = function(root) {
  const m = new Map();
  
  function traverse(node) {
      if (!node) return ;
      let nodes = [];
      if (m.has(node.val)) {
          nodes = m.get(node.val)
      }
      nodes.push(node);
      m.set(node.val, nodes);
      traverse(node.left);
      traverse(node.right);
  }
  traverse(root);
  const groups = [...m.values()].filter(v => v.length > 1);
  const res = [];
  for (let group of groups) {
    res.push(findBiggestSubTree(group));
  }
  return res;
};

//#region TESTING

const example1 = [1,2,4,-1,-1,-1,3,2,4,-1,-1,4];

function run(examples) {
  for (let example of examples) {
    const root = deserialize(example);
    const result = findDuplicateSubtrees(root);
    console.log(result);
  }
}

run([example1]);

//#endregion TESTING