/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels)
    let arr = stones.split('').filter( i => set.has(i))
    return arr.length
};