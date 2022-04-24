/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    let m = matrix[0].length
    let n = matrix.length
    for( let i = 1 ; i< n ; i++ ){
        for( let j = 1 ; j< m ; j++ ){
            if(matrix[i][j] !== matrix[i-1][j-1]){
                return false
            }
        }
    }
    return true

};