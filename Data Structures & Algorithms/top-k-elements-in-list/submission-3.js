class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = {}

        nums.forEach((n) => {
            
            if(map[n]){
                map[n] = map[n] + 1
            }else{
                map[n] = 1
            }
        })

       
        const rankings = Object.entries(map).sort((a,b) => b[1]-a[1]).map(([key, v]) => {
            return key
        })
        return rankings.slice(0,k)

    }
}
