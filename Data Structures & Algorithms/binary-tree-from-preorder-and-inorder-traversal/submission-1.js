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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {


       const build = (preorder, inorder) => {

                if (!preorder.length || !inorder.length) return null;

                const rootVal = preorder[0];
                const root = new TreeNode(rootVal);

                const mid = inorder.indexOf(rootVal);
                // mid = number of nodes in left subtree

                root.left = build(
                    preorder.slice(1, mid + 1),   // next `mid` elements are left subtree
                    inorder.slice(0, mid)          // left portion of inorder
                );

                root.right = build(
                    preorder.slice(mid + 1),       // remaining elements are right subtree
                    inorder.slice(mid + 1)         // right portion of inorder
                );

                return root;
            }

        
    
    
    return build(preorder , inorder)


        
        
    }


}
