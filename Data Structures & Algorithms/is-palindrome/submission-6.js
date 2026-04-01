class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        

        const normalized = s
        .toLowerCase()
        .split(" ")
        .join()
        .split("")
        .filter((c) => {
            const unicode = c.charCodeAt(0)
            console.log(unicode)

            if(unicode >= 48 && unicode <= 57){
                return true
            }

            if(unicode >= 97 && unicode <= 122){
                return true
            }

            return false
        }).join()

        let i = 0
        let j = normalized.length - 1

        console.log(normalized)

        if(!normalized.length || normalized.length === 1)return true

        while(i < j){

            if(normalized[i] === normalized[j]){
                i++
                j--
            }else{
                return false
            }

        }


        return true
    }
}
