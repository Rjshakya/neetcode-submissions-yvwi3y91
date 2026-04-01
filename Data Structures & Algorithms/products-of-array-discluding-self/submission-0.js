class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const ans = []
        
        for(let i = 0 ; i < nums.length ; i++){
        

            for(let j = 0 ; j < nums.length ; j++){

                if(j !== i){
                    
                    if(ans[i] || ans[i] === 0){
                        ans[i] = ans[i] * nums[j]
                    }else{
                        ans[i] =  nums[j]
                    }

                }


            }

        }


        return ans
    }
}
