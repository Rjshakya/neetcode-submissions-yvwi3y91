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
     * @return {TreeNode}
     */

   


    invertTree(root) {
       
       const recurse = (node) => {

        if(!node)return node
        if(node && (!node.left && !node.right))return node
        // if(!node?.left || !node?.right)return node

        

        const temp = node?.left || null
        node.left = node?.right || null
        node.right = temp

        recurse(node.left)
        recurse(node.right)        

        return node
       }


       return recurse(root)
        
    }

    
}
