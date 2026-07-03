class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const map = new Map<number , number>()

        function dfs(step: number) {
            if (step > n) {
                return 0
            }

            if (step === n) {
                return 1
            }

            if(map.has(step)) return map.get(step)

            const ways = dfs(step + 1) + dfs(step + 2)
            map.set(step , ways)
            return ways
        }


        return dfs(0)
    }
}
