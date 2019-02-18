/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(0);
  l1 = l1 || new ListNode(0);
  l2 = l2 || new ListNode(0);

  res.val = l1.val + l2.val;
  if (l1.next || l2.next) {
    res.next = addTwoNumbers(l1.next, l2.next);
  }
  return normalize(res);
};

var normalize = function(list) {
  let head = list;
  while (list) {
    if (list.val > 9) {
      list.val -= 10;
      if (!list.next) {
        list.next = new ListNode(0);
      }
      list.next.val++;
    }
    list = list.next;
  }
  return (head);
}
