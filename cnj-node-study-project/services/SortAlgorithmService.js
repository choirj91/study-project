
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

// 쉘 정렬
const shellSort = (arr) =>{
	let length = arr.length; // 전체 길이

    // 전체 길이의 1/2로 줄여가며 Gap 간격으로 설정
	for (let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < length; i++) {
			let temp = arr[i];
			
			let j = i;
            while(j >= gap && arr[j-gap] > temp) {
                arr[j] = arr[j-gap];
                j-=gap;
            }

			arr[j] = temp;
		}
	}
	return arr;
}

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort,
    shellSort,
}