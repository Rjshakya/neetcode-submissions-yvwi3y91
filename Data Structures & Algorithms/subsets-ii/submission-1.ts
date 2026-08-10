class Solution {
   /**
    * @param {number[]} nums
    * @return {number[][]}
    */
   subsetsWithDup(nums: number[]): number[][] {

      const res: number[][] = []
      nums.sort((a,b) => b-a)

      function backtrack(i, set) {

         if (i === nums.length) {
            res.push([...set])
            return;
         }

         if (i > nums.length) {
            return;
         }


         set.push(nums[i])
         backtrack(i + 1, set)
         
         set.pop()
         while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++
         }

         backtrack(i + 1, set)

      }

      backtrack(0, [])


      return res



   }
}
