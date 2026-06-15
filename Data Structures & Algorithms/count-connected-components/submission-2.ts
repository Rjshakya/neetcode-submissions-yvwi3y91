class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        const graph:Record<number , number[]> = {}
        for(let i = 0 ; i < n; i++){
            graph[i] = []
        }

        for (const [a , b] of edges){
            graph[a].push(b)
            graph[b].push(a)
        }

        const state = Array(n).fill(0)
        
        function dfs(node:number){  
            state[node] = 1
            for(const neighbour of graph[node]){
                if(state[neighbour] !== 1){
                    dfs(neighbour)
                }
            }

            
        }


        let run = 0

        for (let i = 0; i < n ; i++){
            if(state[i] !== 1){
                dfs(i)
                run++
            }
        }


        return run

        


    }
}
