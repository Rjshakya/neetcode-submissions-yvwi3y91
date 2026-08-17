// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if(head === null)return null

        const map = new Map()

        let cur = head

        while(cur){
            let copy = new Node(cur?.val)
            map.set(cur , copy)
            cur = cur?.next
        }


        let curr = head
        while(curr){
           let node = map.get(curr)
           node.next = map.get(curr?.next) ?? null
           node.random = map.get(curr?.random)

            curr = curr?.next
        }

        return map.get(head)

    }
}
