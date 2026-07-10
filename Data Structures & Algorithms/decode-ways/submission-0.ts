class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {

        const map = new Map()

        function dfs(i: number) {
            if(map.has(i))return map.get(i)
            if (i === s.length) return 1
            if (s[i] === "0") return 0

            let left = dfs(i + 1)

            if ((i + 1 < s.length) && (s[i] === "1" || (s[i] === "2" && "0123456".includes(s[i + 1])))) 
            {
                let right = dfs(i+2)
                left += right
            }
            map.set(i, left)
            return left
        }

        return dfs(0)

    }
}
