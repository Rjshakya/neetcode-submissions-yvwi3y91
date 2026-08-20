class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        nums.sort((a,b) => a-b)

        const n = nums.length 
        
        for (let i = 0; i < n; i++){
            if(nums[i] === nums[i+1]){
                return nums[i]
            }
        }

    }
}
