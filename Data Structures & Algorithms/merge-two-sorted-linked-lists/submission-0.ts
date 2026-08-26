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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        let h1 = list1
        let h2 = list2

        let newH: ListNode | null = null
        let ans: ListNode | null = null
        while (h1 && h2) {

            if (h1.val <= h2.val) {
                // let tmp = h1
                if (newH) {
                    newH.next = h1
                    newH = newH.next
                } else {
                    newH = h1
                    ans = h1
                }

                h1 = h1.next
            }
            else {

                if (newH) {
                    newH.next = h2
                    newH = newH.next
                } else {
                    newH = h2
                    ans = h2
                }

                h2 = h2.next
            }

        }


        if (h1) {
            if (newH) {
                newH.next = h1
                newH = newH.next
            } else {
                newH = h1
                ans = h1
            }
        }

        if (h2) {
            if (newH) {
                newH.next = h2
                newH = newH.next
            } else {
                newH = h2
                ans = h2
            }
        }

        return ans

    }
}
