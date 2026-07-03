class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {

        const res : string[][]= []

        const board : string[][] = Array(n).fill([]).map(r => {
            return Array(n).fill(".")
        })

        const posDiag = new Set()
        const negDiag = new Set()
        const col = new Set()

        function dfs(r:number){

            if(r === n){
                const b:string[] = [...board].map(r => r.join(""))
                res.push(b)
                return;

            }

            for (let c = 0 ; c < board.length; c++){

                if(col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)){
                    continue;
                }


                col.add(c)
                posDiag.add(r+c)
                negDiag.add(r-c)
                board[r][c] = "Q"

                dfs(r+1)
                col.delete(c)
                posDiag.delete(r+c)
                negDiag.delete(r-c)
                board[r][c] = "."


            }

        }

        dfs(0)
        return res


    }
}
