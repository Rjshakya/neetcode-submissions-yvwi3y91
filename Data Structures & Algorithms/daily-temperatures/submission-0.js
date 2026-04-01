class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const res = []
        const len = temperatures.length

        for(let i = 0 ; i < len ; i++){
             
             const curr = temperatures[i]

             for(let j = i + 1 ; j <= len ; j++){

                    const next = temperatures[j]
                    if(next > curr){
                        const diff = j - i
                        res[i] = diff
                        break;
                    }else{
                        res[i] = 0
                    }

             }

        }

        return res
    }
}
