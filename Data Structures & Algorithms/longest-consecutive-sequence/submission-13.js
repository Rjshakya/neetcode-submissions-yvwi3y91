class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const sorted = nums.sort((a,b) => a-b)
        let count = 1
        let max = 1

        if(!sorted.length)return 0
        if(sorted.length === 1)return 1
      
      

        for(let i = 0 ; i < sorted.length-1; i++){

            let diff = sorted[i+1] - sorted[i]
            if(diff === 1 ){
                count++
            }else  if(diff === 0){
                continue;
            }else{
                count = 1
            }


            max = Math.max(max , count)

        }

        return max
    }
}
