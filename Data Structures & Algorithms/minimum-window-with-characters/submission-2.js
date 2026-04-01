class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    
minWindow(s, t) {

 
    let tl = t.length
    while(tl <= s.length) {

       

        for(let i = 0 ; i < s.length ; i++){

           
            let ans = ""
            const map = {}

            for(const char of t){
                 if(map[char]){
    map[char] = map[char] + 1
   }else{
    map[char] = 1
   }
            }

            for(let j = i; j < (i + tl); j++){
                 
                 const char = s[j]
                 ans += char



                 if(map[char]){
                    map[char]--
                 }

                 const res = Object.values(map).every(c => c === 0)
                 if(res)return ans

            }

        }

        tl++
    }


    return ""
}


}
