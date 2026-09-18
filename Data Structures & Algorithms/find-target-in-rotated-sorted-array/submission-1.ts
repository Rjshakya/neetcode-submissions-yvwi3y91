class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        let s = 0, e = nums.length - 1;

        while (s <= e) {
            const m = s + Math.floor((e - s) / 2);
            if (nums[m] === target) return m;

            if (nums[s] <= nums[m]) {
                // left half is sorted
                if (nums[s] <= target && target < nums[m]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            } else {
                // right half is sorted
                if (nums[m] < target && target <= nums[e]) {
                    s = m + 1;
                } else {
                    e = m - 1;
                }
            }
        }

        return -1;
    }
}
