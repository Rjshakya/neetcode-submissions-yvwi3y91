class Solution {
   /**
    * @param {character[][]} board
    * @param {string} word
    * @return {boolean}
    */
   exist(board: string[][], word: string): boolean {


      const rows = board.length
      const cols = board[0].length

      const seen = Array.from({ length: rows }, () => Array(cols).fill(false))


      const dirs = [
         [0, 1],
         [1, 0],
         [0, -1],
         [-1, 0]
      ]

      function dfs(r, c, i) {

         if(i === word.length) return true

         if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i] || seen[r][c]) {
            return false
         }




         seen[r][c] = true


         for (const [dr, dc] of dirs) {
            if (dfs(r + dr, c + dc, i + 1)) return true
         }

         seen[r][c] = false
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
