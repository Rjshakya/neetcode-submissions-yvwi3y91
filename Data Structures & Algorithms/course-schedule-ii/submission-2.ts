class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {

        const map = new Map<number, number[]>()

        for (const [n1, n2] of prerequisites) {

            if (!map.has(n1)) map.set(n1, [])
            map.get(n1)?.push(n2)
        }

        const visited = []
        const safe = []

        const res = []
        function dfs(node: number | null) {

            if (visited[node]) return true
            if (safe[node]) return false

            visited[node] = true

            for (const nei of map.get(node) ?? []) {
                if (dfs(nei)) return true
            }

            visited[node] = false
            safe[node] = true
            res.push(node)
            return false


        }

        for (let i = 0; i < numCourses; i++) {
            if (dfs(i)) return []
        }



        return res


    }
}
