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
        /**
         * use two pointer fot this problem
         * we will track left and right
         * the gap btw left and right should be two  before we traverse the linked list
         * we move right n times ahed from lrft
         * then traverseing ll and incr left anf right by one until right becomes null
         * end of traversal i you will see that the left.next is our target element to delete 
         * we delete the node 
         */

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
