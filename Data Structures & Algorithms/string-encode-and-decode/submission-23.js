class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        if(strs.length === 0)return ''

        if(strs.length === 1 && strs[0]==='')return 'null'

        const encoded = strs.join("#9")
       
     

        console.log('e',encoded)
        console.log('strs',strs)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        if(str === '')return []
        if(str === 'null')return ['']

        const decoded = str.split("#9")
        console.log('d',decoded)
        return decoded

    }
}
