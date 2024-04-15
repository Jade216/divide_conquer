function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[ midIdx ] === val) {
            return arr[ midIdx ];
        }
        if (arr[ midIdx ] > val) {
            rightIdx = midIdx - 1;
        }
        else {
            leftIdx = midIdx + 1;
        }
    }
    return -1;
}

module.exports = findFloor