class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = {
             "}":"{",
             "]":"[",
             ")":"("
             
        }


        const stack = []

        for(const char of s){

            if(map[char]){

                const top = stack.length >  0  ? stack.pop() : "#"
                if(top !== map[char]){
                     return false
                }

            }else{
                stack.push(char)
            }
            
        }

        return stack.length === 0

    }
}
