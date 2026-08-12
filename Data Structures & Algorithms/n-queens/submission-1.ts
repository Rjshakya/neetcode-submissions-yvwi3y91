class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {

        const res : string[][] = []

        const board :string[][] =  Array(n).fill([]).map((r) => Array(n).fill("."))

        const col = new Set()
        const posDiagonal = new Set()
        const negDiagonal = new Set()

        function dfs(r){

            if(r === n){
                const sol = [...board].map(r => r.join(""))
                res.push(sol)
                return;
            }


            for(let c = 0 ; c < n ; c++){

                if(col.has(c) || posDiagonal.has(r+c) || negDiagonal.has(r-c)){
                    continue;
                }

                col.add(c)
                posDiagonal.add(r+c)
                negDiagonal.add(r-c)

                board[r][c] = "Q"

                dfs(r+1)
                
                col.delete(c)
                posDiagonal.delete(r+c)
                negDiagonal.delete(r-c)
                board[r][c] = "."

            }

        }  

        dfs(0)
        return res 

        
        
    
    }
}
