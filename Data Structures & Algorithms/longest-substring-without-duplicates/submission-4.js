class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let max = 0
        let i = 0
        let j = 1
        let len = s.length
        const set = new Set()

        if(!len)return 0
        while(i < len && j < len){
            const Ichar = s[i]
            const  Jchar = s[j]



            if(Ichar === Jchar){
                i++
                j = i
                j++
                set.clear()
            }
            else{

                if(set.has(Jchar)){
                     i++
                     j = i
                     j++
                    set.clear()
                    continue;
                }else{
                    set.add(Jchar)
                }

                max = Math.max(max , j-i)
                j++
            }
        }

        return max + 1
    }
}
