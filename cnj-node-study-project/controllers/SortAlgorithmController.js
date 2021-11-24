const { SortAlgorithmService } = require('../services');


// 퀵정렬 > 병합정렬 > 힙정렬 > 셸정렬 > 삽입정렬 > 선택정렬 > 버블정렬
const makeRandomValueArr = (length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        const randomNum = Math.floor(Math.random() * arr.length);
        [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
    }

    return arr;
}

// 버블 정렬
const bubbleSort = async (req, res, next) => {
    const arr = makeRandomValueArr(6000);


    console.log('arr=', arr);
    console.time('bubble');
    const result = SortAlgorithmService.bubbleSort(arr);
    console.timeEnd('bubble');
    console.log('arr=', arr);

    return res.status(200).json({
        message: "success",
        data: result
    });
}

// 선택 정렬
const selectionSort = async (req, res, next) => {

    const arr = makeRandomValueArr(100);

    console.time('selection');
    const result = SortAlgorithmService.selectionSort(arr);
    console.timeEnd('selection');

    return res.status(200).json({
        message: "success",
        data: result
    });
}

// 삽입 정렬
const insertionSort = async (req, res, next) => {

    const arr = makeRandomValueArr(100);

    console.time('insertion');
    const result = SortAlgorithmService.insertionSort(arr);
    console.timeEnd('insertion');

    return res.status(200).json({
        message: "success",
        data: result
    });
}

// 쉘 정렬
const shellSort = async (req, res, next) => {

    const arr = makeRandomValueArr(10);

    console.log('arr==', arr);
    console.time('shell');
    const result = SortAlgorithmService.shellSort(arr);
    console.timeEnd('shell');
    console.log('result==', result);

    return res.status(200).json({
        message: "success",
    });
}

// 힙 정렬
const heapSort = async (req, res, next) => {

    const minArr = makeRandomValueArr(10);
    console.log('minArr==', minArr);
    console.time('min Heap');
    const minResult = SortAlgorithmService.heapSort(minArr, 'min');
    console.timeEnd('min Heap');
    console.log('minResult==', minResult);

    const maxArr = makeRandomValueArr(10);
    console.log('maxArr==', maxArr);
    console.time('max Heap');
    const maxResult = SortAlgorithmService.heapSort(maxArr, 'max');
    console.timeEnd('max Heap');
    console.log('maxResult==', maxResult);


    return res.status(200).json({
        message: "success",
    });
}

// 병합 정렬
const mergeSort = async (req, res, next) => {

    const arr = makeRandomValueArr(10);

    console.log('arr==', arr);
    console.time('merge');
    const result = SortAlgorithmService.mergeSort(arr);
    console.timeEnd('merge');
    console.log('result==', result);

    return res.status(200).json({
        message: "success",
    });
}

// 퀵 정렬
const quickSort = async (req, res, next) => {

    const arr = makeRandomValueArr(10);

    console.log('arr==', arr);
    console.time('quick');
    SortAlgorithmService.quickSort(arr, 0 , arr.length -1);
    console.timeEnd('quick');
    console.log('result==', arr);

    return res.status(200).json({
        message: "success"
    });
}

// 전체 정렬 시간 체크
const allSort = async (req, res, next) => {
    const bubbleArr = makeRandomValueArr(50000);
    const selectionArr = bubbleArr.slice();
    const insertionArr = bubbleArr.slice();
    const shellArr = bubbleArr.slice();
    const heapArr = bubbleArr.slice();
    const mergeArr = bubbleArr.slice();
    const quickArr = bubbleArr.slice();

    console.time('bubble');
    SortAlgorithmService.bubbleSort(bubbleArr);
    console.timeEnd('bubble');

    console.time('selection');
    SortAlgorithmService.selectionSort(selectionArr);
    console.timeEnd('selection');

    console.time('insertion');
    SortAlgorithmService.insertionSort(insertionArr);
    console.timeEnd('insertion');

    console.time('shell');
    SortAlgorithmService.shellSort(shellArr);
    console.timeEnd('shell');

    console.time('heap');
    SortAlgorithmService.heapSort(heapArr, 'max');
    console.timeEnd('heap');

    console.time('merge');
    SortAlgorithmService.mergeSort(mergeArr);
    console.timeEnd('merge');

    console.time('quick');
    SortAlgorithmService.quickSort(quickArr, 0 , quickArr.length -1);
    console.timeEnd('quick');

    return res.status(200).json({
        message: "success",
    })
}

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
    allSort,
    shellSort,
    heapSort,
    mergeSort,
    quickSort,
}