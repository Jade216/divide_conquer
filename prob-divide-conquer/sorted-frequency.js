function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[ midIdx ] === val && (midIdx === 0 || arr[ midIdx - 1 ] < val)) {
            return arr.length - midIdx;
        }
        else if (arr[ midIdx ] < val) {
            leftIdx = midIdx + 1;
        }
        else if (arr[ midIdx ] > val) {
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}

module.exports = sortedFrequency