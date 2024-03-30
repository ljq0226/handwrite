/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  let slow = head,
    fast = head
  let preSlow = slow
  while (fast && fast.next) {
    preSlow = slow
    fast = fast.next.next
    slow = slow.next
  }
  preSlow.next = null
  const l = sortList(head)
  const r = sortList(slow)
  return merge(l, r)
}
function merge(l, r) {
  let dummy = new ListNode(0)
  let prev = dummy
  while (l && r) {
    if (l.val <= r.val) {
      prev.next = l
      l = l.next
    } else {
      prev.next = r
      r = r.next
    }
    prev = prev.next
  }
  if (l) prev.next = l
  if (r) prev.next = r
  return dummy.next
}
