
/**
 * Priority queue
 * 
 * Uses max heap to store value in sorted order
 * 
 * Complexity:
 *  Time:
 *    enqueue: O(logN)
 *    dequeue: O(logN)
 *  Space: O(N)
 * Where: N is the amount of nodes
 */

class PriorityQueue {
  constructor() {
    this.heap = [null];
  }
  
  enqueue(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx  = Math.floor(curIdx / 2);
    while (Number.isInteger(this.heap[parIdx])
        && value > this.heap[parIdx]) {
      this.heap[curIdx] = this.heap[parIdx];
      this.heap[parIdx] = value;
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }
  
  dequeue() {
    if (this.heap.length <= 2) {
      const res = this.heap.pop();
      this.heap[0] = null;
      return res;
    }
    const res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.maxHeapify(1);
    return res;
  }
  
  maxHeapify(rootIdx) {
    const l = rootIdx * 2;
    const r = rootIdx * 2 + 1;
  
    const root = this.heap[rootIdx];
    const childIdx = Number.isInteger(this.heap[r])
        && this.heap[r] >= this.heap[l] ? r : l;
    const child = this.heap[childIdx];
    if (root <= child) {
      this.swap(rootIdx, childIdx);
      this.maxHeapify(childIdx);
    }
  }
  
  swap(a, b) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
    
  isEmpty() {
      return this.heap.length <= 1;
  }
  
  print() {
    console.log(this.heap);
  }
}
