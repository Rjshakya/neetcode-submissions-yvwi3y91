class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let nums = numbers
        let s = 0
        let e = numbers.length - 1


        while (s <= e){

            let sum = nums[s] + nums[e]


            if(sum === target){

                return [s+1 , e+1]

            }

            if(sum > target){
                e--
            }else {
                s++
            }


        }

      


    }
}
