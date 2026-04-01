class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         
         const numsMap = {}

         for(let i = 0 ; i < nums.length; i++){

            if(numsMap[nums[i]]){
                return true
            }else{
                numsMap[nums[i]] = 1
            }

         }


        // const mapArr =   Object.entries(numsMap)
        // mapArr.forEach(([k , v]) => {
        //     if(v > 1)return true
        // })

        return false
         
    }


}
