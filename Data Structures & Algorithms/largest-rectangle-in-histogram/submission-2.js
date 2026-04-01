class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []; // Stores indices
    let maxArea = 0;
    // Add a 0 at the end to force the stack to empty at the end
    let h = [...heights, 0]; 

    for (let i = 0; i < h.length; i++) {
        // While the current bar is shorter than the bar at stack top
        while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
            const height = h[stack.pop()]; // The height of the rectangle
            
            // If stack is empty, width is 'i'. 
            // Otherwise, width is 'current index - new top index - 1'
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea
    }
}
