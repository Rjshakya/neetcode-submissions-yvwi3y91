/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {

       if(!root){
            return []
       }


       const q = [[root]]
       const ans = [[root.val]]

        while(q.length){

            const nodes = q.shift()

            const nodelevels = []
            const valuelevels = []

            nodes.forEach((n) => {

                if(n.left !== null ){
                    nodelevels.push(n.left)
                    valuelevels.push(n.left?.val)
                }

                if(n.right !== null){
                    nodelevels.push(n.right)
                    valuelevels.push(n.right?.val)
                }

            })

            if(nodelevels.length){
                q.push(nodelevels)
                ans.push(valuelevels)
            }
           

        }

        return ans


    }

}