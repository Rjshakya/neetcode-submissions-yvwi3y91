class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {

        const rows = grid.length - 1
        const cols = grid[0].length - 1

        const dirs = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]

        function dfs(r, c) {

            if (r < 0 || c < 0 || r > rows || c > cols || grid[r][c] === 0) {
                return 0
            }

            grid[r][c] = 0


            let max = 1
            for (const [dr, dc] of dirs) {
                max += dfs(dr + r, dc + c)
            }

            return max



        }

        let max = 0
        for (let i = 0 ; i <= rows ; i++){
            for(let j=0; j <= cols; j++){

                if(grid[i][j] === 1){
                    max = Math.max(max,dfs(i,j))
                } 

            }
        }

        return max


    }
}
