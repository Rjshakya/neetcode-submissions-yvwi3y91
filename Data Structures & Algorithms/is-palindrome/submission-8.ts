class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // if (s.length === 1) return true

        s = this.clean(s)
        let p1 = 0
        let p2 = s.length - 1

    

        while (p1 <= p2) {
            if (s[p1] !== s[p2]) return false
            p1++
            p2--
        }

        return true
    }


    clean(s: string) {

        const nonAlpha = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~"
        let m = ""

        for (const char of s) {

            if (!nonAlpha.includes(char) && char !== " ") {
                m += char
            }

        }

        return m.toLocaleLowerCase()
    }
}
