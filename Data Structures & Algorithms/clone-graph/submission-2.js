/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        
        if(!node){
            return null
        }

        const map = {}

        const clone  = (node) => {

            if(map[node.val]){
                return map[node.val]
            }

            const key = node.val
            map[key] =  new Node(node.val, [])

            for(const neighbor of node.neighbors){
                const cn = clone(neighbor)
                map[key].neighbors.push(cn)
            }


            return map[key]


        }


        return clone(node)


    }
}
