// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

// 图示两个链表在节点 c1 开始相交：

// 题目数据 保证 整个链式结构中不存在环。

// 注意，函数返回结果后，链表必须 保持其原始结构 。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

const getListLength = (listNode) => {
  let len = 0, cur = listNode
  while (cur) {
      len++
      cur = cur.next
  }
  return len
}


var getIntersectionNode = function (headA, headB) {
  let curA = headA, curB = headB, lenA = getListLength(headA), lenB = getListLength(headB)
  if (lenA < lenB) {
      [curA, curB] = [curB, curA];
      [lenA, lenB] = [lenB, lenA];
  }

  let i = lenA - lenB
  while (i-- > 0) {
      curA = curA.next;
  }
  while (curA && curA !== curB) {
      curA = curA.next;
      curB = curB.next;
  }
  return curA;
  // const map = new Map()
  // while(headA){
  //     map.set(headA,headA)
  //     headA = headA.next
  // }
  // while(headB){
  //     if(map.has(headB)){
  //         return headB
  //     }
  //     headB = headB.next
  // }
  // return null
};
