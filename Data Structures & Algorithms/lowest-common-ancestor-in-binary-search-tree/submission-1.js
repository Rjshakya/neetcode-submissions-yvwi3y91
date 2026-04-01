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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */

    lowestCommonAncestor(root, p, q) {

        function dfs(root , p, q){

                // case 1 - if p is smaller and q is greater than root
                // that means they are in diff branches , so the root itself is 
                // lca ,

                // case 2  - if both p and  q are in same branch , which is ,
                // p < root and q < root , or p > root and q > root , 
                // then traverse the branch , and again apply case 1

                // case 3 - if either of p is root , 
                // then check whether q > root , then go right , else
                // go left , 

                //  p == root --> p || q=== root ---> q;




                if((p?.val <  root?.val) && (q?.val > root?.val)){
                        return root
                }

                 if((p?.val >  root?.val) && (q?.val < root?.val)){
                        return root
                }


                if((p?.val < root?.val) && (q?.val < root?.val)){
                        return dfs(root?.left , p , q)
                }

                if((p?.val > root?.val ) && (q?.val > root?.val)){
                        return dfs(root?.right , p , q)
                }  

                if(p?.val === root?.val){
                        return p;
                }

                if(q?.val === root?.val){
                        return q
                }


        }

        const res = dfs(root , p , q)
        console.log(`answer is ${res}`)
        return res

    }
    
     
}

