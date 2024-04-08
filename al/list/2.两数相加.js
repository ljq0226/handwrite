/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const preHead = new ListNode(0)
  let pre = preHead
  let curry = 0
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0
      const n2 = l2 ? l2.val : 0
      const sum = n1 + n2 + curry
      curry = sum > 9 ? 1 : 0
      pre.next = new ListNode(sum % 10)
      pre = pre.next
      l1 && (l1 = l1.next)
      l2 && (l2 = l2.next)
  }
  if(curry) pre.next = new ListNode(curry)

  return preHead.next
};
