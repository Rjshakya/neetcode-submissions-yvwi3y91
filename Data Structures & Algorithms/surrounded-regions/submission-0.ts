class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {


        const rows = board.length
        const cols = board[0].length

        function dfs(row , col){
            if(row < 0 || 
                col < 0 || 
                row >= rows || 
                col >= cols || 
                board[row][col] !== "O"
            ){
              return;
            }

         board[row][col] = "T"
         dfs(row + 1 , col)
         dfs(row , col+1)
         dfs(row - 1 , col)
         dfs(row , col-1)
        }


        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
                    if(board[row][col] === "O"){
                       dfs(row , col)
                    }
                }

                continue;

                
            }

        }

    
       for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if(board[row][col] === "O"){
                    board[row][col] = "X"
                }
                
            }

        }
        


       for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if(board[row][col] === "T"){
                    board[row][col] = "O"
                }
                
            }

        }


    }
}
