const { Heap } = require('./DataStructureService');


// 버블 정렬
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
};


// 선택 정렬
const selectionSort = (array) => {
    // 각 자리
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        // 가장 작은 값 찾기
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) minIndex = j;
        }
        if (minIndex !== i) [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

// 삽입 정렬
const insertionSort = (array) => {
    for (let i = 1; i < array.length - 1; i++) {
        let curIndex = i - 1;
        let curValue = array[i];
        while (curIndex >= 0 && array[curIndex] > curValue) {
            array[curIndex + 1] = array[curIndex];
            curIndex--;
        }
        array[curIndex + 1] = curValue;
    }
    return array;
}

// 쉘 정렬
const shellSort = (arr) => {
    let length = arr.length; // 전체 길이

    // 전체 길이의 1/2로 줄여가며 Gap 간격으로 설정
    for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < length; i++) {
            let temp = arr[i];

            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }
    }
    return arr;
}

// 힙 정렬
const heapSort = (arr, type) => {
    var result = [];
    var heap = new Heap(type);

    heap.insert(arr);
    for (let i = 0; i < arr.length; i++) {
        result.push(heap.delete());
    }
    return result;
}

// 합병 정렬
const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) arr.push(left.shift());
        else arr.push(right.shift());
    }
    return [...arr, ...left, ...right];
}

// 합병 정렬
const mergeSort = (array) => {
    if (array.length < 2) return array;
    const half = array.length / 2;
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

// 위치 변경
const swap = (arr, leftIndex, rightIndex) => {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}


// 분할
const partition = (arr, start, end) => {
    const pivot = arr[end]; // 피벗 설정
    let left = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, left);
            left++;
        }
    }
    swap(arr, left, end);
    return left;
};

// 퀵 정렬
const quickSort = (arr, start, end) => {
    if (start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}


module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
    shellSort,
    heapSort,
    mergeSort,
    quickSort,
}