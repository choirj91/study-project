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

// 전체 정렬 시간 체크
const allSort = async (req, res, next) => {
    const bubbleArr = makeRandomValueArr(10000);
    const selectionArr = bubbleArr.slice();
    const insertionArr = bubbleArr.slice();
    const shellArr = bubbleArr.slice();

    console.time('bubble');
    SortAlgorithmService.bubbleSort(bubbleArr);
    console.timeEnd('bubble');

    console.time('selection');
    SortAlgorithmService.selectionSort(selectionArr);
    console.timeEnd('selection');

    console.time('insertion');
    SortAlgorithmService.insertionSort(insertionArr);
    console.timeEnd('insertion');

    console.log('shellArr', shellArr);
    console.time('shell');
    SortAlgorithmService.shellSort(shellArr);
    console.timeEnd('shell');
    console.log('shellArr', shellArr);

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
}