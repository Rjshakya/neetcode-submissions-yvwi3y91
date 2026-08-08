
class MinHeap {

    private heap = []

    private getParent = (i: number) => Math.floor((i - 1) / 2)
    private getLeft = (i: number) => 2 * i + 1
    private getRight = (i: number) => 2 * i + 2

    push(val) {

        this.heap.push(val)

        let i = this.heap.length - 1
        while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
            const p = this.getParent(i);
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }

    }


    pop() {

        const top = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last
            this.siftdown(0)
        }

        return top

    }

    siftdown(i) {

        const n = this.heap.length

        while (true) {

            let smallest = i
            const l = this.getLeft(i)
            const r = this.getRight(i)

            if (l < n && this.heap[l] < this.heap[smallest]) smallest = l
            if (r < n && this.heap[r] < this.heap[smallest]) smallest = r

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest

        }

    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

}




class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    private k: number
    private heap = new MinHeap()
    constructor(k: number, nums: number[]) {

        this.k = k
        for (const n of nums) this.add(n)


    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {

        this.heap.push(val)

        if (this.heap.size() > this.k) {
            this.heap.pop()
        }

        return this.heap.peek()

    }
}
