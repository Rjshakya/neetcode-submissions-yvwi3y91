class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {

        const map = new Map<number, number[]>()

        for (const [n1, n2] of prerequisites) {

            if (map.has(n2)) {
                const nei: number[] = map.get(n2) || []
                nei.push(n1)
                map.set(n2, nei)
            } else {
                map.set(n2, [n1])
            
            }
        }

        const visited = []
        const safe = []
        function dfs(node: number | null) {

            if (visited[node]) return true
            if (safe[node]) return false

            visited[node] = true

            for (const nei of map.get(node) ?? []) {
                if (dfs(nei)) return true
            }

            visited[node] = false
            safe[node] = true
            return false


        }

        for (let i = 0; i < numCourses; i++) {
            if (dfs(i)) return false
        }



        return true




    }
}
