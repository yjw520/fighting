//从尾到头打印链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let stack = [];
    let p = head;
    while(p){
        stack.unshift(p.val);
        p = p.next;
    };
    return stack;
};