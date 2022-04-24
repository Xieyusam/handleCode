/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {
    let m = img.length
    let n = img[0].length
    let ans = new Array(m).fill(1)
    for(let i = 0 ; i< m;i++){
        ans[i] = new Array(n).fill(0)
    }
    let idx = [-1,0,1,-1,0,1,-1,0,1]
    let idy = [-1,-1,-1,0,0,0,1,1,1] 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let total =0 , col = 0
            for (let k = 0 ; k < 9 ; k++){
                let nx = i + idx[k]
                let ny = j + idy[k]
                if(nx < 0 || nx >= m || ny < 0 || ny >= n){
                    continue
                }
                total += img[nx][ny]
                col++
            }
            ans[i][j] = Math.floor(total / col)
        }
    }
    return ans
};