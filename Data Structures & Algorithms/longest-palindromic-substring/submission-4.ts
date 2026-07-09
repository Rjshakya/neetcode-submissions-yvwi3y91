class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {

        if (!s) return s
        if (s.length === 1) return s[0]

        let res = ""
        let resLen = 0
        function isPalindrome(l:number , r:number) {
            while( l >= 0 && r < s.length && s[l] === s[r]){
                if((r - l + 1) > resLen){
                    res = s.slice(l , r+1)
                    resLen = r-l + 1
                }

                l -= 1
                r += 1
            }
        }


        for (let i = 0; i < s.length;i++){
            let l = i
            let r = i

            isPalindrome(l,r)

            let m = i
            let n = i+1
            isPalindrome(m,n)
        }

        return res

        


    }
}
