class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {

         k = nums.length - k

         function qs(l , r){
            
            let pivot = nums[r]
            let pointer = l

            for (let i = l ; i < r ; i++){

                if(nums[i] <= pivot){
                    [nums[i] , nums[pointer]] = [nums[pointer] , nums[i]]
                    pointer++
                }

            }

            [nums[r] , nums[pointer]] = [nums[pointer] , nums[r]]

            if(pointer > k ) return qs(l , pointer - 1)
            if(pointer < k)return qs(pointer + 1 , r)
            if(pointer === k)return nums[pointer]


         }

        return qs(0 , nums.length-1)

    }   
}
 