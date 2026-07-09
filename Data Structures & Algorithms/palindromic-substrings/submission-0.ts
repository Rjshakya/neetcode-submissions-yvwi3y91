class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n = s.length
        let palindromes = 0
       function isPalindrome(l:number , r:number){
          while(l >= 0 && r < n && s[l] === s[r]){
            palindromes++

            l--
            r++
          }
       } 


        for(let i = 0; i < n; i++){

            let l = i
            let r = i
            isPalindrome(l, r)

            let m = i
            let n = i+1
            isPalindrome(m,n)
        }


        return palindromes


    }
}
