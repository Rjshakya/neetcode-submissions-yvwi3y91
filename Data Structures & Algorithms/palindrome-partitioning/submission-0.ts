class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {

        const res:string[][] = []
      
       function dfs(i:number , parts:string[]){
           if(i >= s.length){
              res.push([...parts])
              return;
           }

           for(let j = i ; j < s.length ; j++){
              const str = s.slice(i , j + 1)
               if(isPali(str)){
                  parts.push(str)
                  dfs(j+1 , parts)
                  parts.pop()
               }
           }

       }


      function isPali(s:string){
        return s === s.split("").reverse().join("")

      }

       dfs(0,[])
       return res

    }
}
