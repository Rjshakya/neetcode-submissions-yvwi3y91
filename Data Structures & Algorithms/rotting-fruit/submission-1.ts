class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        /**
         * 
         * 
         * cell state : 
         *   - 0 = empty
         *   - 1 = fresh
         *   - 2 = rotten
         * 
         *  if 1 is on the up/down , or left/right of the 2 , then 
         *  then on every minute (time unit) 1 on up/down , left/right will become 2.
         * 
         *  
         *  
         * 
         */


        let time = 0
        let freshCount = 0
        const q = []


        const rows = grid.length
        const cols = grid[0].length

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {

                if (grid[row][col] === 1) {
                    freshCount++
                }

                if (grid[row][col] === 2) {
                    q.push([row, col])

                }

            }
        }



        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        while (q.length && freshCount > 0) {

            const size = q.length;

            for (let i = 0; i < size; i++) {
                const [row, col] = q.shift()!;

                for (const [dr, dc] of directions) {
                    const r = row + dr;
                    const c = col + dc;

                    if (
                        r < 0 ||
                        c < 0 ||
                        r >= rows ||
                        c >= cols ||
                        grid[r][c] !== 1
                    ) {
                        continue;
                    }

                    grid[r][c] = 2;
                    freshCount--;
                    q.push([r, c]);
                }
            }

            time++;

        }

        return freshCount === 0 ? time : -1


    }
}
