// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
var swapPairs = function(head) {
  let res = new ListNode(0,head),temp= res
  while(temp.next && temp.next.next){
      let cur = temp.next.next
      let pre = temp.next
      pre.next = cur.next
      cur.next = pre
      temp.next = cur
      temp = pre
  }
  return res.next
};
