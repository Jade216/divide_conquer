function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let midInx = Math.floor((leftIdx + rightIdx) / 2)
        if (arr[ midInx ] === 0 &&
            (midInx === 0 || arr[ midInx - 1 ] === 1)) {
            return arr.length - midInx
        }
        else if (arr[ midInx ] === 1) {
            leftIdx = midInx + 1;
        }
        else {
            rightIdx = midInx - 1;
        }
    }
    return 0;
}

module.exports = countZeroes