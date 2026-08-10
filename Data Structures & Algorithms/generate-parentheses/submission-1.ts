class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
      
      const res : string[] = []
      const stack = []

      function bk(o , c){

         if(o == c &&  c == n){
            res.push(stack.join(""))
            return;
         }

         if(o < n){
            stack.push("(")
            bk(o+1 , c)
            stack.pop()
         }

         if(c < o){
            stack.push(")")
            bk(o, c+1)
            stack.pop()
         }

      }
      



      bk(0,0)


      return res


    }
}
