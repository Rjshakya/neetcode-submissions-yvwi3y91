class Solution {

    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */

    ladderLength(
        beginWord: string,
        endWord: string,
        wordList: string[],
    ): number {

        if (!wordList.includes(endWord)){
            return 0
        }


        const graph: Record<string, string[]> = {}
         wordList.push(beginWord)
        for (const word of wordList) {
            const cp = [...word];
            for (let i = 0; i < word.length; i++) {
                cp[i] = "*";
                const wildCard = cp.join("");

                if (!graph[wildCard]) {
                    graph[wildCard] = []
                }

                graph[wildCard].push(word);
                cp[i] = word[i]
            }
        }


        let res = 1
        const q = [beginWord]
        const visit = new Set([beginWord])

        while(q.length){
           const size = q.length

           for (let i=0; i < size; i++){
              const node = q.shift()

              if(node === endWord){
                return res
              }
              
              const nodeCopy = [...node]
              for(let j=0 ; j < node.length ; j++){
                nodeCopy[j] = "*"
               const pattern = nodeCopy.join("")

               for(const nei of graph[pattern]){
                  if(!visit.has(nei)){
                    visit.add(nei)
                    q.push(nei)
                  }
               }

               nodeCopy[j] = node[j]
 
              }

           }

           res++
        }

        return 0

    }



}
