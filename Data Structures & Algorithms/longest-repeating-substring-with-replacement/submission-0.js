class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

     let i = 0
    let j = 0
    let max_freq = 0
    let max_len = 0
    const map = {}

    while (j < s.length) {

        map[s[j]] = (map[s[j]] || 0) + 1;
        max_freq = Math.max(max_freq, map[s[j]])

        while ((j - i + 1) - max_freq > k) {
            map[s[i]]--
            i++
        }

        max_len = Math.max(max_len, (j - i + 1))
        j++
    }

    return max_len
    }
}
