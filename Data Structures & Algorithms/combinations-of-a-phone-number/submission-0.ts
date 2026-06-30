class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {

        const map: Record<string, string> = {
            "2": 'abc',
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        const res: string[] = []

        function dfs(i: number, part: string[]) {
            if (i >= digits.length) {

                if (part.length) {
                    res.push(part.join(""))
                }

                return;
            }

            const letters = map[digits[i]];
            for (const letter of letters) {
                part.push(letter);
                dfs(i + 1, part);
                part.pop();
            }




        }


        dfs(0, [])
        return res

    }
}
