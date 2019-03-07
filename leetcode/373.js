

const buildHeapNode = (i, j, sum) => ({ i, j, sum });

/**
 * 373. Find K Pairs with Smallest Sums
 * You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
 * 
 * Define a pair (u,v) which consists of one element from the first array and one element from the second array.
 * 
 * Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.
 * 
 * Example 1:
 * 
 * Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * Output: [[1,2],[1,4],[1,6]] 
 * Explanation: The first 3 pairs are returned from the sequence: 
 *              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 * Example 2:
 * 
 * Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * Output: [1,1],[1,1]
 * Explanation: The first 2 pairs are returned from the sequence: 
 *              [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 * Example 3:
 * 
 * Input: nums1 = [1,2], nums2 = [3], k = 3
 * Output: [1,3],[2,3]
 * Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 * 
 * Complexity:
 *  Time: klogk
 *  Space: k
 * Where:
 *  k: pair count
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = new MinHeap((node) => node ? node.sum : +Infinity);
  if (nums1.length === 0 || nums2.length === 0) return [];

  const res = [];
  const visited = {};
  heap.insert( buildHeapNode(0, 0,  nums1[0] + nums2[0]) );
  while (res.length < k && !heap.isEmpty()) {
    const node = heap.getMin();
    const { i, j } = node;
    res.push([
      nums1[i],
      nums2[j],
    ]);
    if (i + 1 < nums1.length && !visited[[i + 1, j]]) {
      heap.insert( buildHeapNode(i + 1, j, nums1[i + 1] + nums2[j] ));
      visited[[i + 1, j]] = 1;
    }
    if (j + 1 < nums2.length && !visited[[i, j + 1]]) {
      heap.insert( buildHeapNode( i, j + 1, nums1[i] + nums2[j + 1] ));
      visited[[i, j + 1]] = 1; 
    }
  }
  return res;
};

// some tests here
// console.log(kSmallestPairs([1,1,2], [1,2,3], 10))
// console.log(kSmallestPairs([1,7,11], [2,4,6], 3));
// console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100], 10));

class MinHeap {
  constructor(getNodeVal = (node) => node) {
    this.heap = [null];
    this._getNodeValFunc = getNodeVal;
  }

  insert(newNode) {
    this.heap.push(newNode);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor(idx / 2);
    const val = this._getNodeValFunc(newNode);
    let parentVal = this._getNodeValFunc(this.heap[parentIdx]);
    while (Number.isInteger(parentVal) && val < parentVal) {
      this._swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor(idx / 2);
      parentVal = this._getNodeValFunc(this.heap[parentIdx])
    }
  }

  getMin() {
    let res;
    if (this.heap.length <= 2) {
      res = this.heap.pop();
      this.heap[0] = null;
    } else {
      res = this.heap[1];
      this.heap[1] = this.heap.pop();
      this._heapify(1);
    }
    return res;
  }

  isEmpty() {
    return this.heap.length <= 1;
  }

  _heapify(idx) {
    const l = idx * 2;
    const r = idx * 2 + 1;
    const lval = this._getNodeValFunc(this.heap[l]);
    const rval = this._getNodeValFunc(this.heap[r]);

    const current = this.heap[idx];
    const childIdx = Number.isInteger(rval) && rval < lval ? r : l;
    const child = this.heap[childIdx];
    if (this._getNodeValFunc(current) >= this._getNodeValFunc(child)) {
      this._swap(idx, childIdx);
      this._heapify(childIdx);
    }
  }

  _swap(i, j) {
      const tmp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = tmp;
  }
}