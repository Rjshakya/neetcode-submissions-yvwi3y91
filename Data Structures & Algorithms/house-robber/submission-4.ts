class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        /**
         * 
         * nums[i] (value at index) = amount of money
         * i (index) = house
         * 
         *  can't go
         *  - i + 1 or i - 1
         * 
         * max money i can rob , 
         * 
         * lets start with 0 house ,
         * 
         *   - from each index we have to two choices , we can't go to 
         *   - i + 1 house . or i - 1 house
         * 
         *  - actully , we can go to , i + 1 , if u do not rob i , 
         *  - and if u do rob i , then skip one = i + 2
         * 
         */


        const map = new Map()
        function dfs(i: number) {
            if (i >= nums.length) return 0
            if (map.has(i)) return map.get(i)
            const cost = Math.max(nums[i] + dfs(i + 2) , dfs(i+1))
            map.set(i, cost)
            return cost
        }

    
        return dfs(0)

    }
}
