// 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    //创建dummy结点
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while(cur.next !== null && cur.next.next !== null){
        if(cur.next.val === cur.next.next.val){
            let val = cur.next.val
            while(cur.next !== null && cur.next.val === val){
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};

var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    const dummy = new ListNode(0, head);

    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            } 
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};