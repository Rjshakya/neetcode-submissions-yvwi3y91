class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        function bs(nums, t){
            let s = 0
            let e = nums.length - 1

            while(s <= e){
                let m  = Math.floor(s + e-s/2)

                if(nums[m] === t)return m
                if(nums[m] > t){
                    e = m -1
                }else{
                    s = m + 1
                }
            }

            return -1
        }

        for(let i = 0; i < matrix.length; i++){
            const res = bs(matrix[i] , target)
            if(res > -1) return true
        }

        return false

    }
}
