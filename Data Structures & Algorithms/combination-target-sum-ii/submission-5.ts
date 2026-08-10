class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {

        candidates.sort((a,b) => b-a)
        const nums  = candidates
        const res : number[][] = [ ]


        function backtrack(i , subset , sum , target){
            if(sum === target){
                res.push([...subset])
                return;
            }

            if(i >= nums.length || sum > target){
                return;
            }

            subset.push(nums[i])
            backtrack(i+1 , subset , sum + nums[i] , target)

            subset.pop()

            while((i+1) < nums.length && nums[i] === nums[i+1]){
                i++
            }
            backtrack(i+1 , subset, sum , target)

        }


        backtrack(0 , [] , 0 , target)





        return res


    }
}
