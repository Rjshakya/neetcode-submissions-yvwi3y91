class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let i1 = 0
        let i2 = numbers.length - 1
        let nums = numbers


        while (i1 < i2) {

            const sum = nums[i1] + nums[i2]

            if (sum === target) {
                return [i1 + 1, i2 + 1]
            }

            if (sum > target) {
                i2--
            } else {
                i1++
            }

        }
    }
}
