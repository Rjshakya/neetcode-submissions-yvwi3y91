class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length)return false

        // sort both string , so order become same,
        const sortedS = s.split('').sort().join()

        const sortedT = t.split('').sort().join()


        // then simple compare , return result
       
        return sortedS === sortedT

    }
}
