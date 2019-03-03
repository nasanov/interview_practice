import PriorityQueue from '../data_structures/PriorityQueue';

/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 *
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 * 
 * Complexity:
 *  Time: O(K * NlogN)
 *  Space: O(N)
 * Where:
 *  K: lists length
 *  N: length of the list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const q = new PriorityQueue();
  let done = false;
  while (!done) {
      done = true;
      for (let i = 0; i < lists.length; i++) {
          if (lists[i]) {
              q.enqueue(lists[i].val);
              lists[i] = lists[i].next;
              done = false;
          }
      }
  }
  let head = null;
  while (!q.isEmpty()) {
      const newNode = new ListNode(q.dequeue());
      if (!head) {
          head = newNode;
      } else {
          newNode.next = head;
          head = newNode;
      }
  }
  return head;
};
