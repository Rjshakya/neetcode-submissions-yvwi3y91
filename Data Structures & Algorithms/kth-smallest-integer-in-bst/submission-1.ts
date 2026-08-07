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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {

        const q = []
        function dfs(node){

            if(!node)return null

            dfs(node?.left)
            q.push(node?.val)
            dfs(node?.right)

            return;
        }

        dfs(root)
        return q[k-1]



    }
}
