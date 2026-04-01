class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let r = 0;
        let queue = []; // We will store INDICES here
        let ans = [];

        while (r < nums.length) {
            // 1. Maintain the "Monotonic" property
            // If the current number is bigger than the last one in our queue,
            // the last one will NEVER be a maximum again. Pop it!
            while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[r]) {
                queue.pop();
            }

            // 2. Add the current index to the queue
            queue.push(r);

            // 3. Remove the index from the front if it's outside the window
            // The window starts at (r - k + 1) and ends at r.
            // If the front index is r - k, it's officially "too old."
            if (queue[0] === r - k) {
                queue.shift();
            }

            // 4. Start recording the answer once the first window is full
            // The first window is complete when r reaches k - 1
            if (r >= k - 1) {
                ans.push(nums[queue[0]]);
            }

            r++;
        }

        return ans

    }
}
