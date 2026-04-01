class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

    if (s1.length > s2.length) return false;

    const neededChars = {};

    for (const char of s1) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }

    let i = 0;
    let j = 0;

    const requiredLength = s1.length; 

    while (j < s2.length) {
        const charIn = s2[j];

        neededChars[charIn] = (neededChars[charIn] || 0) - 1;

        if (j - i + 1 > requiredLength) {
            const charOut = s2[i];
            neededChars[charOut]++; 
            i++;
        }


        if (j - i + 1 === requiredLength) {
            if (Object.values(neededChars).every(count => count === 0)) {
                return true;
            }
        }

        j++;
    }

    return false;
    }
}
