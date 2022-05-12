/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let map = new Map()
    let min = Number.MAX_VALUE
    for( let ch of 'balloon' ){
        map.set(ch,0)
    }
    for( let ch of text ){
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1)
        }
    }
    map.set('l',Math.floor(map.get('l')/2))
    map.set('o',Math.floor(map.get('o')/2))
    for( let key of map.keys()){
        min = Math.min(min,map.get(key))
    }
    return min
};