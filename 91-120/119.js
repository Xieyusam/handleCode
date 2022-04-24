/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    let curColor = image[sr][sc]
    if(curColor === newColor){
        return image
    }
    let dx = [1, 0, 0, -1];
    let dy = [0, 1, -1, 0];
    let n = image.length
    let m = image[0].length
    let queue = []
    queue.push([sr,sc])
    image[sr][sc] = newColor
    while(queue.length){
        let cell = queue.shift()
        let x = cell[0]
        let y = cell[1]
        for( let i = 0 ; i < 4 ; i++ ){
            let mx = x + dx[i]
            let my = y + dy[i]
            if(mx >= 0 && mx < n && my >= 0 && my < m && image[mx][my] === curColor ){
                queue.push([mx,my])
                image[mx][my] = newColor
            }
        }
    }
    return image
};