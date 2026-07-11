class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {

        // topdown 
        // return this.topDown(coins,amount)  

        // bottom up
        return this.bottomUp(coins,amount)

    }

    topDown(coins: number[], amount: number): number {
        coins.sort((a, b) => a - b)

        const map: Map<number, number> = new Map()
        map.set(0, 0)

        function dfs(amount: number) {
            if (map.has(amount)) {
                return map.get(amount)
            }

            let minn = Infinity
            for (const coin of coins) {
                let diff = amount - coin
                if (diff < 0) break;

                minn = Math.min(minn, 1 + dfs(diff))
            }

            map.set(amount, minn)
            return minn
        }

        const result = dfs(amount)
        if (result !== Infinity) return result
        return -1
    }


    bottomUp(coins: number[], amount: number): number {

        coins.sort((a, b) => a - b)
       
        const dp = Array(amount + 1).fill(0)

       
        for (let i = 1; i < amount + 1; i++) {
            let minn = Infinity

            for(const coin of coins){
                let diff = i - coin 
                if(diff < 0)break;
                minn = Math.min(minn , 1 + dp[diff])
            }

            dp[i] = minn
        }



        if(dp[amount] < Infinity){
            return dp[amount]
        }

        return -1


    }
}
