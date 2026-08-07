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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {

        function dfs(root , min , max){

            if(root === null || root === undefined) return true

            // choice

            if(root.val <= min || root.val >= max){
                return false
            }


            const left = dfs(root?.left , min , root.val)
            const right = dfs(root?.right , root.val , max)

            return left && right


        }

        return dfs(root , -Infinity , Infinity)

    }
}
