class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        const map = new Map<number, number[]>()

        for (const [a, b] of edges) {
            if (!map.has(a)) map.set(a, [])
            map.get(a)?.push(b)

            if (!map.has(b)) map.set(b, [])
            map.get(b)?.push(a)
        }


        const seen = []
        function dfs(node: number) {
            seen[node] = true
            for (const nei of map.get(node) ?? []) {
                if (!seen[nei]) {
                    dfs(nei)
                }
            }
        }


        let count = 0
        for (let i = 0; i < n; i++) {
            if (!seen[i]) {
                count++
                dfs(i)
            }
        }

        return count

    }
}
