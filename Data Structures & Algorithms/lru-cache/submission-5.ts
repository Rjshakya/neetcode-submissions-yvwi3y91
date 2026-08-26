class LRUCache {
    /**
     * @param {number} capacity
     */

    map = new Map<number , LLNode>
    cap = 0
    list = new List
    constructor(capacity: number) {
        this.cap = capacity
        this.map = new Map()
        this.list = new List()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.map.has(key)) return -1
        const node = this.map.get(key)
        this.list.moveToTail(node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {

        if(this.map.has(key)){
            const node = this.map.get(key)
            node.val = value
            this.list.moveToTail(node)
            return;
        }

        if (this.list.len === this.cap) {
            const node = this.list.shift()
            if(node) this.map.delete(node.key)
        }

        const node = new LLNode(key , value)
        this.map.set(key, node)
        this.list.push(node)

    }
}

class LLNode {

    next = null
    prev = null
    val = null

    constructor(public key:number, val: number | null) {
        this.val = val
    }

}


class List {

    head = null
    prev = null
    len = 0
    constructor() { }


    remove(node: LLNode) {

        if (node.prev) node.prev.next = node.next
        else this.head = this.head.next

        if (node.next) node.next.prev = node.prev
        else this.prev = this.prev.prev

        node.next = node.prev = null
        this.len--
        return node

    }

    push(node: LLNode) {

        if (!this.len) {
            this.prev = this.head = node
        } else {
            this.prev.next = node
            node.prev = this.prev
            this.prev = node
        }

        this.len++

    }

    shift(): LLNode | void {

        if (!this.head) return;
        return this.remove(this.head)

    }

    moveToTail(node:LLNode){
         this.remove(node)
         this.push(node)
    }

}
