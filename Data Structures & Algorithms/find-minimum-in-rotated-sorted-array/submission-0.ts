class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {

        function isRotated(nums: number[]) {
            if (nums.length === 1) return false
            return nums[0] > nums[nums.length - 1]
        }



        function bs(nums: number[]) {

            if (!isRotated(nums)) return nums[0]

            let s = 0
            let e = nums.length - 1

            while (s < e) {

                const m = Math.floor(s + e - s / 2)

                if (nums[m - 1] !== undefined && nums[m - 1] > nums[m]) {
                    return nums[m]
                }

                if (nums[m + 1] !== undefined && nums[m + 1] < nums[m]) {
                    return nums[m + 1]
                }

                if (nums[m] < nums[0]) {
                    e = m - 1 
                } else {
                    s = m + 1
                }

            }


        }


        return bs(nums)

    }
}
