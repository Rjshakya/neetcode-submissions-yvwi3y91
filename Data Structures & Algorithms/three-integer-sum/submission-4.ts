class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        nums = nums.sort((a,b) => a-b)
        const res : number[][] = []
        
        const n = nums.length

        for(let i = 0 ; i < n ; i++){

            if(i > 0 && nums[i] === nums[i-1])continue

            let l = i+1
            let r = n-1

            while(l < r){
                
                const sum = nums[l] + nums[i] + nums[r]

                if(sum < 0){
                    l++
                }

                if(sum > 0){
                    r--
                }


                if(sum === 0){
                    res.push([nums[l] , nums[i] , nums[r]])
                    l++
                    r--

                    while(l < r && nums[l] === nums[l-1]){
                        l++
                    }

                    while(l < r && nums[r] === nums[r+1]){
                        r--
                    }
                }


            }


        }


        return res


    }
}
