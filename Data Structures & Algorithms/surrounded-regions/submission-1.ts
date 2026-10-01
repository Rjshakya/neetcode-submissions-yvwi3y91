class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {

        const rows = board.length
        const cols = board[0].length

        function dfs(r: number, c: number) {

            if (r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== "O") {
                return;
            }

            board[r][c] = "T"
            dfs(r + 1, c)
            dfs(r, c + 1)
            dfs(r - 1, c)
            dfs(r, c - 1)

        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
                    if (board[r][c] === 'O') {
                        dfs(r, c)
                    }
                }

            }
        }


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (board[r][c] === "O") {
                    board[r][c] = "X"
                }

            }
        }


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                if (board[r][c] === "T") {
                    board[r][c] = "O"
                }

            }
        }



    }
}
