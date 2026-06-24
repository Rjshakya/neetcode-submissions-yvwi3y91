class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

       const res = []

       function dfs(c:number[] , r:number[]){

           if(!r.length){
              res.push([...c])
              return;
           }

           for (let i = 0 ; i < r.length; i++){
              
              c.push(r[i])
              dfs(c , [...r.slice(0 , i) , ...r.slice(i+1)])
              c.pop()

           }

       }

       dfs([] , nums)
       return res

    }
}
