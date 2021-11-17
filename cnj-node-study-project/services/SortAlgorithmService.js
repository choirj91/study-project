
// 버블 정렬
const bubbleSort = (array) => {
    let length = array.length;
    let i, j, temp;
    for (i = 0; i < length - 1; i++) {
        for (j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};


// 선택 정렬
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

module.exports = {
    selectionSort,
    bubbleSort,
}