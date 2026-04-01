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
     * @return {number[]}
     */
    rightSideView(root) {

        if(!root){
            return []
        }

        const q= [[root]]
        const treeLevels = [[root.val]]

        while(q.length){

            const nodes = q.shift()

            const level = []
            const numlevel = []

            nodes.forEach((n) => {

                if(n.left !== null){
                    level.push(n.left)
                    numlevel.push(n.left?.val)
                }

                if(n.right !== null){
                    level.push(n.right)
                    numlevel.push(n.right?.val)
                }



            })


            if(level.length){
                q.push(level)
                treeLevels.push(numlevel)
            }

        }

        const ans = treeLevels.map(levels => levels[levels.length-1])

        console.log(ans)
        return ans


    }
}
