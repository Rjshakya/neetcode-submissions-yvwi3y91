

class MinStack {

    stack;
    minStack;
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {

        this.stack.push(val)

        if(!this.minStack.length){
            this.minStack.push(val)
        }else{
            const currMin = this.minStack[this.minStack.length - 1]
            this.minStack.push(Math.min(currMin , val))
        }

        
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]

    }
}
