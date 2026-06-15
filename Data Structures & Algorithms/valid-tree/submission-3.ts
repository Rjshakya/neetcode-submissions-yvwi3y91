class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {

     

      const adjList:Record<number , number[]> = {}

      for (let i = 0 ; i < n ; i++){
         adjList[i] = []
      }


      for (const [n1 , n2] of edges){
        adjList[n1].push(n2)
        adjList[n2].push(n1)
      }


      const state:number[] = Array(n).fill(0)
      /**
       * 0 = initial node
       * 1 = visited node
       * 2 = clean node
       */

      const dfs = (node:number , parent:number) => {
        if(state[node] === 1) return false
       // if(state[node] === 2 ) return true
 
        state[node] = 1

        for (const neighbour of adjList[node]){

            if(neighbour === parent) continue;
            if(!dfs(neighbour , node))return false
        }

        return true


      }

      return dfs(0 , -1) && state.every((s) => s === 1)


    }
}
