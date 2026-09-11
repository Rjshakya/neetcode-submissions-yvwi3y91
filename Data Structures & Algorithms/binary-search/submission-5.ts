class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {


        let s = 0
        let e = nums.length - 1

        while(s <= e){

            let m = Math.floor(s + e-s/2)

            if(nums[m] === target)return m

            if(nums[m] > target){
                e = m - 1
            }else{
                s = m + 1
            }

        }


        return -1
    }
}
