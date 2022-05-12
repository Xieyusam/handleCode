/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
    let map = new Map()
    for( let i= 0  ; i < deck.length; i++){
        map.set(deck[i],(map.get(deck[i])||0)+1)
    }
    let g = -1
    for( let [key,value] of map.entries()){
        console.log(value)
        if(g == -1){
            g = value
        }else{
            g = gcd(g,value)
        }
    }
    return g >= 2;
};

var gcd = function(x,y){
    return x == 0 ? y : gcd(y%x,x)
}