class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {



        const rows = grid.length
        const cols = grid[0].length

        if (rows === 1 && cols === 1) {
            const state = grid[0][0]
            if (state === 0 || state === 2) return 0
            return -1
        }

        const q: number[][] = []
        const visited = new Set()
        let fresh = 0

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c])
                    visited.add(r + ":" + c)
                } else if (grid[r][c] === 1) fresh++
            }
        }


        if (fresh === 0) return 0

        function addRottenCell(r: number, c: number) {

            if (r < 0 || c < 0 || r === rows
                || c === cols || grid[r][c] !== 1 || visited.has(r + ":" + c)) {
                return;
            }

            visited.add(r + ":" + c)
            q.push([r, c])
            fresh--

        }

        let timer = 0

        while (q.length) {

            for (let i = q.length; i > 0; i--) {

                const [r, c] = q.shift()
                grid[r][c] = 2


                addRottenCell(r + 1, c)
                addRottenCell(r, c + 1)
                addRottenCell(r - 1, c)
                addRottenCell(r, c - 1)
            }

            timer += 1
        }



        return fresh === 0 ? timer - 1 : -1

    }
}
