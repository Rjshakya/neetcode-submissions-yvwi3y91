class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {

        
        const memo:Map<number,number> = new Map()
        function dfs(i:number ){
            if(i >= cost.length)return 0;
            if(memo.has(i))return memo.get(i)

            const result = cost[i] + Math.min(dfs(i+1) , dfs(i+2))
            memo.set(i,result)
            return result

        }

        return Math.min(dfs(0) , dfs(1))

    }
}
