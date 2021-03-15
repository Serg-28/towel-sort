
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i].length == 0){
            continue;
        }
        let arr = [];
        if (i == 1 || i % 2 != 0){
            arr = matrix[i].reverse();
        } else {
            arr = matrix[i]
        }
        for (let j = 0; j < arr.length; j++){
            result.push(arr[j]);
        }
    }
    return result;
}
