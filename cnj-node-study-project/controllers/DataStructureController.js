const { DataStructureService } = require('../services');

const arrayStudy = async (req, res, next) => {

    const food = ["수박", "사이다", "바나나", "삼겹살", "오이", "상추"];
    const foodArray = new Array("수박", "사이다", "바나나", "삼겹살", "오이", "상추");

    console.log("food 2 = ", food[2]);
    // food 2 =  바나나

    console.log("foodArray 2 = ", foodArray[2]);
    // foodArray 2 =  바나나

    console.log("추가 전 - ", food);
    // 추가 전 -  [ '수박', '사이다', '바나나', '삼겹살', '오이', '상추' ]
    insertArrayValue(food, '추가', 2);
    console.log("추가 후 - ", food);
    // 추가 후 -  ['수박', '사이다', '추가', '바나나', '삼겹살', '오이', '상추']



    return res.status(200).json({
        message: "success",
    });
}

/* 
    arr = 추가하고자 하는 배열
    value = 추가 값
    path = 추가 위치
*/
const insertArrayValue = (arr, value, path) => {

    // 추가할 위치의 원소를 옮겨 공간 확보
    for (let i = arr.length - 1; i >= path; i--) {
        arr[i + 1] = arr[i];
    }

    // 원소 추가
    arr[path] = value;

    return arr;
}

const linkedListStudy = async (req, res, next) => {

    const linkedList = new DataStructureService.LinkedList();

    linkedList.insertFirst('1. 바나나');
    linkedList.insertLast('2. 사과');
    linkedList.insertLast('3. 딸기');
    linkedList.insertLast('4. 수박');
    linkedList.insertLast('5. 참외');
    console.log('getData==', linkedList.getData(2));
    linkedList.removeData(2);
    linkedList.insertAt("3. 복숭아", 2);

    const data = linkedList.log();
    linkedList.printLinkedListValue();

    return res.status(200).json({
        massage: "success",
        linkedList: data
    });
}

module.exports = {
    arrayStudy,
    linkedListStudy
}