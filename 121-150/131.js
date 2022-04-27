// 我的

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let len = s.length
    let map1 = new Map()
    let map2 = new Map()
    // let id = 0
    for(let i = 0 ; i < len ; i++){
        if(!map1.has(s[i]) && !map2.has(t[i])){
            map1.set(s[i],i)
            map2.set(t[i],i)
        } else if(map1.get(s[i]) == map2.get(t[i])){
            continue
        } else {
            return false
        }
    }
    return true
};

//官方
var isIsomorphic2 = function(s, t) {
    const s2t = {};
    const t2s = {};
    const len = s.length;
    for (let i = 0; i < len; ++i) {
        const x = s[i], y = t[i];
        if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
            return false;
        }
        s2t[x] = y;
        t2s[y] = x;
    }
    return true;
};
