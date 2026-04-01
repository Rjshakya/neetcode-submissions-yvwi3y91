class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        const len = prices.length
        let max  = 0

        let  i = 0 
        let  j = 1


        while(i < len && j < len){


            if(prices[i] < prices[j]){
                max = Math.max(max , prices[j] - prices[i])

                // if(j === len-1){
                //     i++
                //     j = i
                // }
                // j++

            }
            
            // else{

            //     if(j === len-1){
            //         i++
            //         j = i
            //     }

            //     j++
            // }

             if(j === len-1){
                    i++
                    j = i
                }

                j++


        }

        return max
    }
}
