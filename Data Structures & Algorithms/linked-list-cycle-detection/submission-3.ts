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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {

        const seen = []

        let curr = head
        let index = 1
        let prev = null
        while (curr) {

            if (seen[curr?.next?.val]) return true

            prev = curr

            if (curr?.next?.val !== null || curr?.next?.val !== undefined) {
                seen[curr?.next?.val] = true
            }

            curr = curr?.next

        }

        return false

    }
}
