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
     * @return {void}
     */

    // using reverse and merge
    reorderList(head) {
      let slow = head;
      let fast = head.next;

      while(fast !=null && fast.next!=null){
        slow= slow.next;
        fast=fast.next.next;
      }

      let second = slow.next;
      slow.next = null;

      let prev=null;


    //   reverse secondll

    while(second !=null){
       let  temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }


    let first = head;//l1
    second = prev //l2

    while(second !=null)//second list can be longer
    {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second=temp2;


    }






    }
}
