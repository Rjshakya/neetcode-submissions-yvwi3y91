class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {

        const res = []
        candidates.sort((a , b) => a -b)

        function dfs(i:number , comb:number[] , s:number){
            if(s === target){
                res.push([...comb])
                return;
            }


            if(i >= candidates.length || s > target){
                return ;
            }


            comb.push(candidates[i])
            dfs(i + 1 , comb , s + candidates[i])

            comb.pop()

            while ((i + 1) < candidates.length && candidates[i] === candidates[i + 1]){
                i++
            }

            dfs(i+1 , comb , s)
        }


        dfs(0 , [] , 0)
        return res
    }
}
