class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number { 
        return this.twoPointer(nums1 , nums2)
    }

    twoPointer(nums1: number[], nums2: number[]): number {

        let tl = nums1.length + nums2.length
        let counter = 0
        let n1 = 0, n2 = 0
        let prev = -1
        let curr = -1

        const target = Math.floor(tl / 2)

        while (counter <= target) {

            prev = curr

            if (n2 >= nums2.length || (n1 < nums1.length && nums1[n1] < nums2[n2])) {
                curr = nums1[n1]
                n1++
            } else {
                curr = nums2[n2]
                n2++
            }

            counter++

        }



        return tl % 2 === 1 ? curr : (prev + curr) / 2

    }
}
