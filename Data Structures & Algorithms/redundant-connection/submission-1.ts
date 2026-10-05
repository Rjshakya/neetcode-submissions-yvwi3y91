class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {

        const n = edges.length
        const parent = Array.from({ length: n + 1 }, (_, i) => i)
        const size = Array(n + 1).fill(1)

        function find(node: number) {
            if (node === parent[node]) return node
            return parent[node] = find(parent[node])
        }

        function union(n1: number, n2: number): boolean {
            const r1 = find(n1)
            const r2 = find(n2)

            if (r1 === r2) {
                return true
            }

            if (size[r1] > size[r2]) {
                parent[r2] = r1
                size[r1] += size[r2]
            } else {
                parent[r1] = r2
                size[r2] += size[r1]
            }

        }



        for (const [n1, n2] of edges) {
            if (union(n1, n2)) return [n1, n2]
        }
    }
}
