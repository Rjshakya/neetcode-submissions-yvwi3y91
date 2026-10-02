class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false

    const map = new Map<number, number[]>()

    for (const [a, b] of edges) {
      if (!map.has(a)) map.set(a, [])
      map.get(a).push(b)

      if (!map.has(b)) map.set(b, [])
      map.get(b).push(a)
    }


    const set = new Set<number>()

    function dfs(node: number) {

      set.add(node)
      for (const nei of map.get(node) ?? []) {
        if (!set.has(nei)) {
          dfs(nei)
        }
      }

    }

    dfs(0)
    console.log(set.size)
    return n === set.size

  }
}
