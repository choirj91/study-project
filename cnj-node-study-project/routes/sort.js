var express = require('express');
var router = express.Router();

// 빠른순서
// 퀵정렬 > 병합정렬 > 힙정렬 > 셸정렬 > 삽입정렬 > 선택정렬 > 버블정렬

router.get('/selectionSort', (req, res, next) => {

    var arr = [5, 3, 6, 2, 6, 8, 2];

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

    console.log(selectionSort(arr));

    return res.status(200).send('ok');
});

router.get('/insertSort', (req, res, next) => {
    var insertionSort = function (array) {
        var i = 1, j, temp;
        for (i; i < array.length; i++) {
            temp = array[i]; // 새로운 숫자를 선택함
            for (j = i - 1; j >= 0 && temp < array[j]; j--) { // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
                array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다
            }
            array[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
        }
        return array;
    };
    insertionSort([5, 6, 1, 2, 4, 3]); // [1, 2, 3, 4, 5, 6]

    return res.status(200).send('ok');
});

router.get('/mergeSort', (req, res, next) => {
    var arr = [5,2,4,7,6,1,3,8];

    var mergeSort = function(array) {
        if (array.length < 2) return array; // 원소가 하나일 때는 그대로 내보냅니다.
        var pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
        var left = array.slice(0, pivot); // 쪼갠 왼쪽
        var right = array.slice(pivot, array.length); // 쪼갠 오른쪽
        return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
      }
      function merge(left, right) {
        var result = [];
        while (left.length && right.length) {
          if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
            result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
          } else {
            result.push(right.shift()); // 오른쪽도 마찬가지
          }
        }
        while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
        while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
        return result;
      };

      console.log( mergeSort(arr));
      return res.status(200).send('ok');
});

router.get('/quickSort', (req, res, next) => {

    var partition = function(array, left, right, pivotIndex) { // 정렬하는 부분
        var temp;
        var pivot = array[pivotIndex];
        while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
          while (array[left] < pivot)
            left++;
          while (array[right] > pivot)
            right--;
          if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
            temp = array[left];
            array[left] = array[right];
            array[right] = temp; // 서로 바꿔줍니다.
            left++;
            right--;
          }
        }
        temp = array[left];
        array[left] = array[pivotIndex];
        array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
        return left;
      };
      
      var quickSort = function(array, left, right) { // 재귀하는 부분
        if (!left) left = 0;
        if (!right) right = array.length - 1;
        var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
        pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
        if (left < pivotIndex - 1)
          quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
        if (pivotIndex + 1 < right)
          quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
        return array;
      };
      
      console.log(quickSort([4,1,7,6,3,8,2,5]));

    return res.status(200).send('ok');
});

module.exports = router;