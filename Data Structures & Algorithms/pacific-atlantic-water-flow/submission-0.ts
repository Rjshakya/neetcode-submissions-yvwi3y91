class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {

        const res: number[][] = []

        if (!heights || heights.length === 0 || heights[0].length === 0) return res;

        const rows = heights.length
        const cols = heights[0].length

        const pQ: [number, number][] = []
        const aQ: [number, number][] = []

        const pacific: boolean[][] = Array.from({ length: rows }, () =>
            Array(cols).fill(false))
        const atlantic: boolean[][] = Array.from({ length: rows }, () =>
            Array(cols).fill(false))

        for (let r = 0; r < rows; r++) {

            pQ.push([r, 0])
            pacific[r][0] = true

            aQ.push([r, cols - 1])
            atlantic[r][cols - 1] = true
        }

        for (let c = 0; c < cols; c++) {

            pQ.push([0, c])
            pacific[0][c] = true

            aQ.push([rows - 1, c])
            atlantic[rows - 1][c] = true

        }

        this.bfs(pQ, pacific, heights)
        this.bfs(aQ, atlantic, heights)


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c])
                }

            }
        }


        return res
    }


    bfs(q: number[][], ocean: boolean[][], heights: number[][]) {

        const rows = heights.length
        const cols = heights[0].length

        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        while (q.length) {

            const [r, c] = q.shift()

            for (const [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc

                if (nr < 0 || nc < 0 || nr === rows || nc === cols || ocean[nr][nc] ||
                    heights[nr][nc] < heights[r][c]) {
                    continue
                }

                ocean[nr][nc] = true
                q.push([nr, nc])

            }


        }

    }
}
