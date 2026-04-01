class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        const len = heights.length
        let area = 0

        for(let i = 0; i < len; i++){

            let w = 1
            let minH = heights[i]

            for(let j = i; j < len; j++){
                minH = Math.min(minH, heights[j])
                if(j !== i){
                    w++
                }

                area = Math.max(area ,  w * minH)
            }

            

        }


        return area


    }
}
