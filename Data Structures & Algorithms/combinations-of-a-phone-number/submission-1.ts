class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {

         const wmap = {
            "2": 'abc',
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
         }

         const res :string[] = []


         function dfs(i , set){

            if(i >= digits.length){

                if(set.length) res.push(set.join(""))
                return;

            }

            const letters = wmap[digits[i]]
            for(const letter of letters){
                  set.push(letter)
                  dfs(i+1 , set)
                  set.pop()

            }

         }


         dfs(0,[])
         return res


         








         return res        

    }
}
