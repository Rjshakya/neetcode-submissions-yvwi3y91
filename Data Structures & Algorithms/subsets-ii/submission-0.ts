class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {

       const res = []
       nums.sort((a,b) => a-b)

       function dfs(sub:number[] , i:number){

         if(i >= nums.length){
            res.push([...sub])
            return;
         }

         sub.push(nums[i])
         dfs(sub , i + 1)

         sub.pop()

         while((i+1) < nums.length && nums[i] === nums[i + 1]){
            i++
         }

         dfs(sub , i + 1)

       }


       dfs([] , 0)
       return res
        
    }
}
