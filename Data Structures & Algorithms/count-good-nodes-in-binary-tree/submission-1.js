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
     * @return {number}
     */
    goodNodes(root) {

        const q = [[root , root.val]]
        let counter = 1

        while(q.length){

            const nodeWithMax = q.shift()
            const node = nodeWithMax[0]
            let max = nodeWithMax[1]

            if(node.left !== null){

                let leftMax = max

                if(node.left.val >= max){
                    counter++
                    leftMax = node.left.val
                }

                q.push([node.left , leftMax])

            }


            if(node.right !== null){
                
                let rightMax = max

                if(node.right.val >= max){
                    counter++
                    rightMax = node.right.val
                }

                q.push([node.right , rightMax])

            }




        }


        return counter



    }
}
