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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {


        function findKthNode(node, k) {
            let curr = node
            while (curr && k > 0) {
                curr = curr.next
                k -= 1
            }

            return curr
        }

        let dummy = new ListNode(null)
        dummy.next = head
        let gprev = dummy

        while (true) {

            const kth = findKthNode(gprev, k)

            if (!kth) {
                break;
            }


            const gNext = kth.next

            let prev = gNext
            let curr = gprev.next

            while (curr !== gNext) {
                let tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            }

            let tmp = gprev.next
            gprev.next = kth
            gprev = tmp

        }



        return dummy.next




    }
}
