const { SortAlgorithmService } = require('../services');


// 퀵정렬 > 병합정렬 > 힙정렬 > 셸정렬 > 삽입정렬 > 선택정렬 > 버블정렬

const arr = [5, 3, 6, 2, 6, 8, 2, 2, 5, 3, 7, 3, 2, 4, 6, 3, 4, 2];

// 버블 정렬
const bubbleSort = async (req, res, next) => {

    console.time('bubble');
    const result = SortAlgorithmService.bubbleSort(arr);
    console.timeEnd('bubble');

    return res.status(200).json({
        message: "success",
        data: result
    });
}

// 선택 정렬
const selectionSort = async (req, res, next) => {

    console.time('selection');
    const result = SortAlgorithmService.selectionSort(arr);
    console.timeEnd('selection');

    return res.status(200).json({
        message: "success",
        data: result
    });
}

module.exports = {
    selectionSort,
    bubbleSort
}