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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        let newHead : ListNode | null = null
        function backtrack(node , prev){
            if(!node){
                newHead = prev
                return;
            }

            backtrack(node.next , node)
            node.next = prev

        }



        backtrack(head , newHead)
        return newHead

        

    }
}
