/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // [1, 2, 3, 4, 5]

        let dummy = new ListNode(0,head);
        let left = dummy;
        let right = head;

        while( n>0 && right){
            right = right.next;
            n -=1;

        }
        while(right){
            right = right.next;
            left= left.next;
        }

        left.next = left.next.next;
        return dummy.next;
    }
}
