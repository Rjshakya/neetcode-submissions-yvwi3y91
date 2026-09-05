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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {

        if(!lists || !lists.length){
            return null
        }



        function mergeLists(s:number , e:number){
            if(s === e){
                return lists[s]
            }

            if((s + 1) == e){
                return mergeTwoLists(lists[s] , lists[e])
            }

            const m = Math.floor(s + (e-s)/2)
            const left = mergeLists(s , m)
            const right = mergeLists(m+1 , e)
            return mergeTwoLists(left , right)

        }



        function mergeTwoLists(l1: ListNode, l2: ListNode):ListNode {
            const dummy = new ListNode(null)
            let curr = dummy

            while (l1 !== null && l2 !== null) {

                if (l1.val < l2.val) {
                    curr.next = l1
                    l1 = l1?.next

                } else {
                    curr.next = l2
                    l2 = l2?.next

                }

                curr = curr.next



            }

            curr.next = l1 !== null ? l1 : l2

            return dummy?.next
            

        }


        return mergeLists(0 , lists.length - 1)

    }
}
