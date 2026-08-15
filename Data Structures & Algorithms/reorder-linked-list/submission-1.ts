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
    reorderList(head: ListNode | null): void {
       if (!head || !head.next) return;
       // find the middle

       let slow = head
       let fast = head

       while(fast?.next && fast.next?.next){
        slow = slow.next
        fast = fast.next?.next
       }


        // reverse the middle

        let prev = null
        let curr = slow.next
        slow.next = null
        while(curr){

            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        }

        let p1 = head
        let p2 = prev

        while(p2){

            let temp = p1?.next
            let temp2 = p2?.next


            p2.next = temp
            p1.next = p2

            p1 = temp
            p2 = temp2

        }



    }
}
