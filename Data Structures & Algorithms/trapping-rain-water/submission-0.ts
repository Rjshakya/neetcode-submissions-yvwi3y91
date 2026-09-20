class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        const n  = height.length
        let lMax = []
        let rMax = []

        lMax[0] = height[0]
        rMax[n - 1] = height[n - 1]

        for(let i = 1 ; i < n ; i++){
            lMax[i] = Math.max(lMax[i - 1] , height[i])
        }

        for(let i = n-2 ; i >= 0; i--){
            rMax[i] = Math.max(rMax[i+1] , height[i])
        }

        let total = 0
        for(let i = 0; i < n; i++){
            total += Math.min(lMax[i] , rMax[i]) - height[i]
        }

        return total

    }
}
