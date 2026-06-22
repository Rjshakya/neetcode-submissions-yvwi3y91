class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDepth(s: string): number {

       const stack = []
       

      let max = 0
      for (let i = 0 ; i < s.length ; i++){
         if(s[i] === "("){
            stack.push(s[i])
           max = Math.max(max , stack.length)
         }

         if(s[i] === ")"){
            stack.pop()
         }
      }

      return max


    }
}
