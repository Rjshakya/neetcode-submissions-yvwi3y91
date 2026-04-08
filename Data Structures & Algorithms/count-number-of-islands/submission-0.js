class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {



       
        if(!grid || !grid.length){
            return 0
        }

         let count = 0
        const g = grid

        const rows = g.length
        const cols = g[0].length

        const dfs = (r , c) => {

            if(r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] === "0" ){
                return ;
            }

            g[r][c] = "0"

            dfs(r - 1 , c) // down
            dfs(r + 1 , c) // up
            dfs(r , c + 1) // right
            dfs(r , c - 1) // left

        }


        for(let r = 0 ; r < rows; r++){
            for(let c = 0 ; c < cols ;  c++){
                if(g[r][c] === "1"){
                    count++
                    dfs(r , c)
                }
            }
        }
        


        return count

    }
}
