class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {

        const res: string[][] = []

        function isPalin(str) {
            const split = str.split("")
            const reverse = split.reverse()
            return str === reverse.join("")

        }

        function dfs(i, set) {

            if (i >= s.length) {
                res.push([...set])
                return;
            }


            for (let j = i; j < s.length; j++) {

                const w = s.slice(i, j + 1)
                if (isPalin(w)) {

                    set.push(w)
                    dfs(j + 1, set)
                    set.pop()

                }

            }


        }



        dfs(0,[])
        return res

    }
}
