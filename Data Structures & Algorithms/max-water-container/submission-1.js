class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let i = 0
        let j = heights.length - 1

        let max = 0
        while(i < j){
            const area = (j - i) * Math.min(heights[j] , heights[i])
            max = Math.max(max , area)

            if(heights[i] < heights[j]){
                i++
            }else{
                j--
            }

        }

        return max
    }
}
