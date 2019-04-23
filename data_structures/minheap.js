class MinHeap {
  constructor(array) {
    this.heap = [null];
    if (array) {
      this.heap = this.heap.concat(array);
      this._heapify(1);
    }
  }

  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor(idx / 2);
    while (Number.isInteger(this.heap[parentIdx])
      && val < this.heap[parentIdx]) {
        this.heap[idx] = this.heap[parentIdx];
        this.heap[parentIdx] = val;
        idx = parentIdx;
        parentIdx = Math.floor(idx / 2);
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

  _heapify(idx) {
    const l = idx * 2;
    const r = idx * 2 + 1;

    const current = this.heap[idx];
    const childIdx = Number.isInteger(this.heap[r]) && this.heap[r] < this.heap[l] ? r : l;
    const child = this.heap[childIdx];
    if (current >= child) {
      this.heap[idx] = child;
      this.heap[childIdx] = current;
      this._heapify(childIdx);
    }
  }
}

module.exports = MinHeap;