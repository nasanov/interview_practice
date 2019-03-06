class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.parent = null;
    this.color = 1;
  }
}

class RBTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const _insertRec = (root) => {
      if (!root) return new Node(val);

      if (val < root.val) {
        root.left = _insertRec(root.left);
        root.left.parent = root;
      }
      else {
        root.right = _insertRec(root.right);
        root.right.parent = root;
      }
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

  rotateRight(a) {
    const p = a.parent;
    const b = a.left;
    a.left = b.right;

    if (b.right)
      b.right.parent = a;
    b.right = a;
    a.parent = b;
    b.parent = p;
    if (p) {
      if (p.left == a)
        p.left = b;
      else
        p.right = b;
    }
    return b;
  }

  print(inOrder = true) {
    let s = '';

    if (!this.root) return ;

    if (inOrder) {
      s = this._inorder(this.root);
    } else {
      const q = [this.root];
      while (q.length) {
        const tmp = q.shift();
        s += `${tmp.val} `;
        if (tmp.left) q.push(tmp.left);
        if (tmp.right) q.push(tmp.right);
      }
    }
    console.log(s);
  }

  _minValNode(root) {
    while (root && root.left) {
      root = root.left;
    }
    return root;
  }

  _inorder(root) {
    if (!root) return '';

    let s = this._inorder(root.left);
    s += `${root.val} `;
    s += this._inorder(root.right);
    return s;
  }
}

function main() {
  const tree = new RBTree();
  tree.insert(50);
  tree.insert(30);
  tree.insert(600);
  tree.print(true);
  tree.print(false);
  console.log(tree);
  tree.root = tree.rotateRight(tree.root);
  console.log(tree);
  tree.print(true);
  tree.print(false);
}

if (require.main === module) {
  main();
}