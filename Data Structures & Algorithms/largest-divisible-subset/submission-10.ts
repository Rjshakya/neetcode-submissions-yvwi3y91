class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    largestDivisibleSubset(nums: number[]): number[] {

        nums.sort((a, b) => a - b)

        const n = nums.length
        const dp:number[][] = nums.map(n => [n])
        let res = []
        for(let i = n - 1 ; i >= 0 ; i--){
            for(let j = i+1 ; j < n; j++){
                if(nums[j] % nums[i] === 0){
                    let temp = [nums[i] , ...dp[j]]
                    dp[i] = temp.length > dp[i].length ? temp : dp[i]

                }
            }

            res = dp[i].length > res.length ? dp[i] : res
        }

        return res

    }
}
