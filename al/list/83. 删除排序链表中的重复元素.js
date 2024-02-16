/**
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
输入：head = [1,1,2]
输出：[1,2]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const res = new ListNode(0, head)
  let pre = head
  while (pre && pre.next) {
    const next = pre.next
    if (pre.val === next.val) {
      pre.next = next.next
    } else {
      pre = pre.next
    }
  }
  return res.next
}
