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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // If the main tree is empty, it can't contain a subtree
        if (!root) return false;

        // 1. Check if the trees starting at current nodes are identical
        if (this.isSameTree(root, subRoot)) return true;

        // 2. If not, recursively check the left and right children of the main tree
        return this.isSubtree(root.left, subRoot) || 
               this.isSubtree(root.right, subRoot);
    }

    /**
     * Helper function to check if two trees are exactly the same
     */
    isSameTree(p, q) {
        // If both are null, they are identical
        if (!p && !q) return true;
        
        // If one is null or values don't match, they aren't identical
        if (!p || !q || p.val !== q.val) return false;

        // Recursively check left and right children
        return this.isSameTree(p.left, q.left) && 
               this.isSameTree(p.right, q.right);
    }
}
