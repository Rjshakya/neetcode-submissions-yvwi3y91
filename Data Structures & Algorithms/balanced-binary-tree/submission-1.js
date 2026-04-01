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
    isBalanced(root) {

        let ans = true
        const dfs = (node) => {
            if(!node)return 0

            const leftH = dfs(node?.left)
            const rightH = dfs(node?.right)

            if((leftH - rightH > 1) || (rightH - leftH > 1)){
                ans = false
            }
            return Math.max(leftH , rightH) + 1
        }
        dfs(root)
        return ans
    }
}
