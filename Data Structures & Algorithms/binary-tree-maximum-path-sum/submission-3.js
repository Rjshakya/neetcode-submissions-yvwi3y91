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
    maxPathSum(root) {

        let max = -Infinity

        const dfs = (node) => {

            if(node === null){
                return 0
            }


            const l = Math.max(0 , dfs(node.left))
            const r = Math.max(0 , dfs(node.right))

            const currentPath = node.val  + l  +  r;

            max = Math.max(max , currentPath);

            return node.val +  Math.max(l,r)


        }

         dfs(root)
         return max

    }
}
