// 查找有序二维数组的目标值

var findNumberIn2DArray = function (matrix, target) {
    if(matrix == null || matrix.length == 0){
        return false
    }
    let row = 0
    let column = matrix.length - 1
    while( row < matrix.length && column >= 0 ){
        if(matrix[row][column] == target){
            return true
        }else if(matrix[row][column] > target){
            column --
        } else {
            row ++
        }
    }
	return false
};

// test

var test = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

var target = 8

console.log(findNumberIn2DArray(test,target))
