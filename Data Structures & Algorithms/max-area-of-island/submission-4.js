class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        const rows = grid.length
        const cols  = grid[0].length

        let maxArea = 0


        function walk(r , c ){

            if(r < 0 || c < 0 ||  r >= rows  || c >= cols || grid[r][c] === 0){
                return 0
            }

            grid[r][c] = 0

            let u =  walk(r-1, c)
            let rs =  walk(r, c+1)
            let d =  walk(r+1, c)
            let l =  walk(r, c-1)

            return 1 + u + rs + d + l
        }


        for(let r = 0; r < rows ; r++ ){
            for(let c=0; c < cols ; c++){

                if(grid[r][c] === 1){
                    // then start walking and give me the area 

                    const area = walk(r,c)
                    // console.log(area)
                    maxArea=Math.max(area , maxArea)
                }
            }
        }



        // console.log(maxArea)


        return maxArea

    }
}
