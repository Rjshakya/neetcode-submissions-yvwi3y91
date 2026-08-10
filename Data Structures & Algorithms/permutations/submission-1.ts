class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

      const res : number [] [] = []





      function backtrack(set , state){

         if(set.length === nums.length){
            res.push([...set])
            return;
         }


         for(let i = 0 ; i < state.length ; i++){

               set.push(state[i])
               backtrack(set , [...state.slice(0,i) , ...state.slice(i+1)])
               set.pop()

         }


      }


      backtrack([] , nums)











      return res

    }
}
