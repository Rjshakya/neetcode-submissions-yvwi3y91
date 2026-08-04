class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {

    //    return this.recursive(s , wordDict)

        return this.byDp(s, wordDict)

    }

    recursive(s:string , wordDict:string[]):boolean{
         const n = s.length
        const cache = new Map<number, boolean>()
     

        function dfs(i: number) {

            if (i === n) {
                return true
            }

            if(cache.has(i)) return cache.get(i)


            for (const word of wordDict) {

                const wLen = word.length

                if (s.slice(i, i + wLen) === word) {
                    if(dfs(i + wLen)){
                        cache.set(i , true)
                        return true
                    }
                }

            }

            cache.set(i , false)
            return false

        }

        return dfs(0)
    }

    byDp(s: string, wordDict: string[]):boolean{

        const n = s.length
        const dp = Array(n).fill(false)
        dp[n] = true

        for(let i = n; i >= 0 ; i--){
            for(const w of wordDict){
                const wLen = w.length

                if( s.slice(i , i + wLen) === w){
                    dp[i] = dp[i + wLen]
                }

                if(dp[i]) break;

            }
        }

        return dp[0]

    }
}
