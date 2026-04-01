class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const res = new Array(temperatures.length).fill(0)
        const temps = temperatures

        const stack = []

        for(let i = 0; i < temps.length; i++){

            const curr = temps[i]
            while(stack.length && curr > stack[stack.length-1][0]){
                const [v , stackI] = stack.pop()
                res[stackI] = i - stackI
            }
            stack.push([curr , i])

        }
       

        return res
    }
}
