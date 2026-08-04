class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {

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
}
