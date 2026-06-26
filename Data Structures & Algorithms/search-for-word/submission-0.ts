class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        const wordMap: Map<string, boolean> = new Map([...word].map((ch) => [ch, false]))
        const rows = board.length
        const cols = board[0].length

        const visit = Array.from({ length: rows }, () =>
            Array(cols).fill(false),
        );
        const directions = [[0, 1], [-1, 0], [1, 0], [0, -1]]
        function dfs(r: number, c: number, i: number) {

            if (i === word.length) return true

            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i] || visit[r][c]) {
                return false
            }


            visit[r][c] = true

            for (const [nr, nc] of directions) {
                if (dfs(r + nr, c + nc, i + 1)) return true
            }

            visit[r][c] = false
            return false

        }


        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                if (dfs(i, j, 0)) return true

            }

        }

        return false

    }
}
