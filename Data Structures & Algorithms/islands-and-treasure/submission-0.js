class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const rows = grid.length;
        const cols = grid[0].length;

        const q = []

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 0){
                    q.push([r , c])
                }
            }
        }


        const directions = [
            [-1 , 0],
            [1, 0],
            [0 , 1],
            [0 , -1]
        ]

        while(q.length){

            const [r ,c] = q.shift()

            for(const [dr , dc] of directions){
                const nr = r + dr;
                const nc = c + dc;

                if(nr <  0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== 2147483647){
                    continue;
                }

                grid[nr][nc] = grid[r][c] + 1
                q.push([nr , nc])

            }

        }




    }
}
