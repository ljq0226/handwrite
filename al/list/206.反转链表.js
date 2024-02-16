// 题意：反转一个单链表。
// 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

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
var reverseList = function(head) {
  //1->2->3->4->5->NULL 
  //1<-2<-3
  let pre = next = null,cur = head
  while(cur.next){
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
