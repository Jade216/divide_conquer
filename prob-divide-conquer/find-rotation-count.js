function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[ leftIdx ] < arr[ rightIdx ]) {
        return 0;
    }
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[ midIdx ] > arr[ midIdx + 1 ]) {
            return midIdx + 1;
        }
        else if (arr[ midIdx ] >= arr[ leftIdx ]) {
            leftIdx = midIdx + 1;
        }
        else {
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}

module.exports = findRotationCount