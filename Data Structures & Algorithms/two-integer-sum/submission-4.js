class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = {}

        nums.forEach((n , i) => {
            map[n] = i
        })
        
        for(let i = 0 ; i<nums.length ; i++){

            let diff = target - nums[i]
            if(map[diff]){

                if(i !== map[diff]){
                     return [i ,map[diff] ]
                }

               
            }

        }



    }
}
