class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {

        let res = Math.max(...nums)
        let max = 1
        let min = 1

        for (let i = 0 ; i < nums.length; i ++){

            const n = nums[i]

            if(n === 0){
                max = 1
                min = 1
                continue;
            }
            let temp = max * n
            max = Math.max(n * max , n * min , n)
            min = Math.min(temp , n * min , n)

            res = Math.max(res, max)

        }

        return res
        

    }
}
