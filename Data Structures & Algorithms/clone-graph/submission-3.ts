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
    cloneGraph(node: Node | null): Node {

        if(!node)return node


        const map = new Map()
        function dfs(node){
            if(map.has(node)) return map.get(node)

            const copy = new Node(node.val)
            map.set(node , copy)
            for (const nei of node?.neighbors){
                copy.neighbors.push(dfs(nei))
            }

            return copy

        }
        


        return dfs(node)






    }
}
