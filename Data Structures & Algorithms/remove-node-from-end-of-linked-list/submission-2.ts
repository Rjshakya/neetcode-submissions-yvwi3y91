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
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {

        if (!head || !head.next) return null

        const len = () => {
            let i = 0
            let curr = head

            while (curr) {
                curr = curr.next
                i++
            }

            return i

        }

        let curr = head
        let prev = null
        let i = 0
        while (curr) {

            let temp = curr.next
            if (i === (len() - n)) {

                if(i === 0) return curr?.next || curr
                prev.next = temp
            }


            prev = curr
            curr = curr.next
            i++


        }

        return head

    }
}
