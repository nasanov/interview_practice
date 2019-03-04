class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const _insertRec = (root) => {
      if (!root) return new BSTNode(val);

      if (val < root.val)
        root.left = _insertRec(root.left);
      else
        root.right = _insertRec(root.right);
      return root;
    }
    this.root = _insertRec(this.root);
  }

  search(val) {
    const _searchRec = (root) => {
      if (!root) return false;

      if (root.val === val) return true;
      else if (root.val > val) return _searchRec(root.left);
      else return _searchRec(root.right);
    }

    return _searchRec(this.root, val);
  }

  delete(val) {
    const _deleteRec = (root) => {
      if (!root) return ;

      if (root.val > val)
        root.left = _deleteRec(root.left);
      else if (root.val < val)
        root.right = _deleteRec(root.right);
      else {
        if (!root.left)
          return root.right;
        else if (!root.right)
          return root.left;

        const node = this._minValNode(root.right);

        root.val = node.val;
        _deleteRec(root.right, node.val);
      }
    }
    _deleteRec(this.root);
  }

  _minValNode(root) {
    while (root && root.left) {
      root = root.left;
    }
    return root;
  }
}

function main() {
  const tree = new BST();
  console.log(tree.search(50));
  tree.insert(50);
  console.log(tree.search(50));
  tree.insert(30);
  tree.insert(600);
  tree.delete(3);
  tree.delete(50);
  console.log(tree.search(50));
  console.log(tree)
}

if (require.main === module) {
  main();
}