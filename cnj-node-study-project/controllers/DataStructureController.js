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

    // food.splice(2, 1); // 바나나 제거
    // console.log("바나나 제거 후 = ", food);
    // // 바나나 제거 후 =  [ '수박', '사이다', '삼겹살', '오이', '상추' ]
    
    // food.splice(2, 0, "버섯"); // 버섯 추가
    // console.log("추가 후 = ", food);
    // // 추가 후 =  [ '수박', '사이다', '버섯', '삼겹살', '오이', '상추' ]

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
    for (let i = arr.length -1; i >= path; i--) {
        arr[i + 1] = arr[i];
    }

    // 원소 추가
    arr[path] = value;

    return arr;
}

module.exports = {
    arrayStudy
}