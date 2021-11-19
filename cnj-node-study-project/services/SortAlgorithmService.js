
// 버블 정렬
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length -i -1; j++) {
            if(array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
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
            if(array[minIndex] > array[j]) minIndex = j;
        }
        if(minIndex !== i ) [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

// 삽입 정렬
const insertionSort = (array) => {
    for(let i = 1; i < array.length-1; i++) {
        let curIndex = i - 1;
        let curValue = array[i];
        while(curIndex >= 0 && array[curIndex] > curValue) {
            array[curIndex + 1] = array[curIndex];
            curIndex--;
        }
        array[curIndex + 1] = curValue;
    }
    return array;
}

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
}