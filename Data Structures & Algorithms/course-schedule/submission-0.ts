class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {


        const graphAdjList:Record<number , number[]> = {}
        /**
         * 
         * {
         *  1 : [0],
         *  0 : [1]
         * }
         */

        for (let i = 0; i < numCourses; i++){
            graphAdjList[i] = []
        }

        for (const [a, b] of prerequisites) {
            graphAdjList[b].push(a)
        }

        const state = new Array(numCourses).fill(0)
        /**
         * 
         * 0 - intial state
         * 1 - visited state 
         * 2 - done state
         */

        function dfs(node:number){
            // having state 1 of node , in starting
            // it means it was already , and we are visiting it again
            // it is cycle detecting.
            if(state[node] === 1) return false
            // state 2 says , all processing is done  node
            if(state[node] === 2) return true

            state[node] = 1

            for (const neighbor of graphAdjList[node]){
                if(!dfs(neighbor)) return false
            }

            state[node] = 2
            return true

        }

        for(let i = 0 ; i < numCourses; i++){
            if(!dfs(i))return false
        }


        return true

    }
}
