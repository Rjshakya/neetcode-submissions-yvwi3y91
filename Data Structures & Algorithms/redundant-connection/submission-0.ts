class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {

        const n = edges.length
        const graph:Map<number , number[]> = new Map()

        for(let i = 1; i < n + 1; i++){
            graph[i] = []
        }

        const dfs = (src:number , target:number , visited:Set<number>) => {

            if(src === target){
                return true;
            }

            visited.add(src)

            for (const neighbour of graph.get(src)){
                if(visited.has(neighbour)) continue;

                if(dfs(neighbour , target , visited)){
                    return true
                }
            }

           return false

        }

        

        for (const [e1 , e2] of edges){

            if(graph.has(e1) && graph.has(e2)){

                const visited:Set<number> = new Set
                if(dfs(e1 , e2 , visited)){
                    return [e1 , e2]
                }
            }

            if(!graph.has(e1)) graph.set(e1, [])
            if(!graph.has(e2)) graph.set(e2 , [])

            graph.get(e1).push(e2)
            graph.get(e2).push(e1)

        }

        return []


    }
}
