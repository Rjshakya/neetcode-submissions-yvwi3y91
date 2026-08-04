class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {

        return this.byDfs(nums)


    }

    byDfs(nums: number[]): number{

        const cache = new Map()
        const n = nums.length
        function dfs(i:number , prev:number){

            if(i === n){
                return 0
            }

            const key = `${i}:${prev}`
            if(cache.has(key)) return cache.get(key)
            
            let notIncludeMe = dfs(i+1 , prev)
            let includeMe = nums[i] > prev ?  1 + dfs(i+1 , nums[i]) : 0

            const res = Math.max(notIncludeMe , includeMe)

            cache.set(key , res)
            return res
            
        }

        return dfs(0 , -Infinity)

    }
}
