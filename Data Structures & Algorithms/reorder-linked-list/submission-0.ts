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


        if(!head || !head.next)return;


        const nodeList = []

        let curr = head
        while(curr){
            nodeList.push(curr)
            curr = curr.next
        }

        let i = 0
        let j = nodeList.length - 1

        while(i < j){

            nodeList[i].next = nodeList[j]
            i++

            if(i >= j)break;

            nodeList[j].next = nodeList[i]
            j--

        }
        
        nodeList[i].next = null
         

    }
}
