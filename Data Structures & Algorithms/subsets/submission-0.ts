class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
 
      const res:number[][] = []
      
      function dfs(i:number , subset:number[]){
          
          if (i >= nums.length){
            res.push([...subset])
            return;
          }


          subset.push(nums[i])
          dfs(i + 1 , subset)

          subset.pop()
          dfs(i+1 , subset)
        
      }

      dfs(0 , [])
      return res


    }
}
