class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {

        const res = []

        function dfs(i:number , sum:number, comb:number[]){
            if(sum > target){
                return;
            }

            if(sum === target){
                res.push([...comb])
                return;
            }

            if (i >= nums.length){
                return;
            }

            comb.push(nums[i])
            dfs(i , sum + nums[i] , comb)
            comb.pop()
            dfs(i + 1 , sum , comb)

        }


        dfs(0 , 0 , [])
        return res
    }
}
