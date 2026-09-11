class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {



        let min = 1

        let max = -Infinity

        for (const pile of piles) {
            max = Math.max(max, pile)
        }

        function canEat(speed) {
            let hours = 0
            for (const pile of piles) {
                hours += Math.ceil(pile / speed)
            }

            return hours <= h
        }

        while (min < max) {

            const m = Math.floor((min + max) / 2)

            if (canEat(m)) {
                max = m
            } else {
                min = m + 1
            }

        }

        return min



    }
}
