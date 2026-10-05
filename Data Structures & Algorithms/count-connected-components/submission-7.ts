class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        const size: number[] = Array(n).fill(1)
        const parent = Array.from({ length: n }, (_, i) => i);

        function find(node: number) {
            if (node === parent[node]) return node
            return parent[node] = find(parent[node])
        }

        function union(n1: number, n2: number) {
            const root1 = find(n1)
            const root2 = find(n2)

            if (root1 === root2) return;

            if (size[root1] > size[root2]) {
                parent[root2] = root1
                size[root1] += size[root2]
            } else {
                parent[root1] = root2
                size[root2] += size[root1]
            }

        }

        for (const [n1, n2] of edges) {
            union(n1, n2)
        }

        const roots = new Set<number>()
        for (let i = 0; i < n; i++) roots.add(find(i))

        return roots.size

    }
}
