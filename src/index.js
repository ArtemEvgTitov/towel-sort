// You should implement your task here.

module.exports = function towelSort(data = []) {
    const res = [];
    if (data.length === 0) {
        return res;
    }
    for (let i = 0; i < data.length; i++) {
        if (i === 0 || i % 2 === 0) {
            for (let j = 0; j < data[i].length; j++) {
                res.push(data[i][j]);
            }
        } else {
            for (let j = data[i].length - 1; j >= 0; j--) {
                res.push(data[i][j]);
            }
        }
    }
    return res;
}