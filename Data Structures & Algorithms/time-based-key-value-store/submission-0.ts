class TimeMap {

    keyStore: Map<string, any[][]>
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {

        const list = this.keyStore.get(key) ?? []
        this.keyStore.set(key, [...list, [value, timestamp]])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {

        if (!this.keyStore.has(key)) return ""

        const values = this.keyStore.get(key)

        let res = ""

        let s = 0
        let e = values.length - 1

        while (s <= e) {

            const m = Math.floor((s + e) / 2)

            if (values[m][1] <= timestamp) {
                res = values[m][0]
                s = m + 1
            } else {
                e = m - 1
            }

        }


        return res

    }
}
