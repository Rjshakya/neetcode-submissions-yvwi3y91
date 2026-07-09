class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        if(!nums.length)return 0
        if(nums.length === 1)return nums[0]

        function bottomUp(arr:number[]){
            if(!arr.length)return 0
            if(arr.length === 1)return arr[0]

            let prevMax = arr[0]
            let maxOfAllPrev = Math.max(arr[0] , arr[1])

            for(let i = 2 ; i < arr.length; i++){

               let curr = Math.max(arr[i] + prevMax , maxOfAllPrev)

               prevMax = maxOfAllPrev
               maxOfAllPrev = curr
            }

            return maxOfAllPrev
        }


        let prev = nums[0]
        let maxOfAllPrev = Math.max(nums[0] , nums[1])

        for(let i = 2; i < nums.length; i++){



            let curr = Math.max(nums[i] + prev , maxOfAllPrev)

            if(i === nums.length-1){
                curr = Math.max(maxOfAllPrev , nums[i] + bottomUp(nums.slice(1,i-1)))
            }

            prev = maxOfAllPrev
            maxOfAllPrev = curr
        }


        return maxOfAllPrev
        
    }
}
