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
    levelOrder(root: TreeNode | null): number[][] {

        if (!root) {
            return []
        }

        const q = [[root]]
        const ans: number[][] = [[root.val]]

        while (q.length) {

            const level = q.shift()
            const nodesOfLevel = []

            for (const node of level) {
                if (node?.left) {
                    nodesOfLevel.push(node.left)
                }

                if (node?.right) {
                    nodesOfLevel.push(node.right)
                }
            }

            if (nodesOfLevel.length) {
                q.push(nodesOfLevel)
                ans.push(nodesOfLevel.map(n => n.val))
            }


        }


        return ans

    }
}
