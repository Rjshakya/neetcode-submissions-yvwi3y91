class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {

        const res = []
        const stack = []

        function dfs(oN:number , cN:number){
            
            if((oN === cN) && (cN === n)){
                res.push(stack.join(""))
                return;
            }

            if (oN < n){
                stack.push("(")
                dfs(oN + 1 , cN)
                stack.pop()
            }

            if(cN < oN){
                stack.push(")")
                dfs(oN , cN+1)
                stack.pop()
            }

        }

       dfs(0 , 0)
       return res

    }
}
