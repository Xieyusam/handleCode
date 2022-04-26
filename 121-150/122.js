/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    let map = new Map(widths.entries())
    let space = 100 ;
    let line = 1;
    for( let i = 0 ; i <s.length ; i++ ) {
        let ch = s[i]
        need = map.get(ch.charCodeAt() - 'a'.charCodeAt())
        if(need <= space){
            space -= need
        } else {
            space = 100 - need;
            line++
        }
    }
    return [line , 100 - space]
};