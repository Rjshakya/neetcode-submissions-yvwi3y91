class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {

        const rows = grid.length
        const cols = grid[0].length

        const dirs = [
            [0, 1],
            [-1, 0],
            [1, 0],
            [0, -1]
        ]

        function dfs(r, c) {

            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = "0"

            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc)
            }

        }

        let count = 0

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (grid[r][c] === "1") {
                    count++
                    dfs(r, c)
                }

            }
        }

        return count

    }
}
