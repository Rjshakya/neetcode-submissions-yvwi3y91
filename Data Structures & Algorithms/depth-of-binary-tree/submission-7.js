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
    maxDepth(root) {
        if(!root)return 0
        let max = 1
        const recurse = (node , level) => {

            if(!node)return;
            if(!node?.left && !node?.right){
                
                max = Math.max(max , level)
                return;
            }

          
            recurse(node.left , level+1)
            recurse(node.right , level+1)

        }

        recurse(root , 1)

       
        return max

    }
}
