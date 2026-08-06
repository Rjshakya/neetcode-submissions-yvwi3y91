class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {

        return this.byDfs(nums)
     }

    byDfs(nums: number[]): boolean {

        const sum = (nums: number[]) => {
            let s = 0
            for (const num of nums) {
                s += num
            }

            return s
        }

        const total = sum(nums)
        if((total % 2) !== 0){
            return false
        }


        const target = total / 2
        const cache = new Map()

        function dfs(i:number , sum:number){


            if(sum === target) return true
            if(sum > target || i === nums.length) return false

            const key = i + ":" + sum;
            if(cache.has(key)) return cache.get(key)

            const include = dfs(i+1 , sum + nums[i])
            const exclude = dfs(i+1 , sum)

            cache.set(key, include || exclude)

            return include || exclude

        }

        return dfs(0 ,0)


    }
}
