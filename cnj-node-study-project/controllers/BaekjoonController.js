
const id1 = async (req, res, next) => {

    let input = require('fs').readFileSync('controllers/Baekjoon/1.txt').toString().split('\n');

    return res.status(200).json({
        message: "success",
        data: input
    });
}

// 재귀함수 영역 ******************************************
// 팩토리얼
const id10872 = async (req, res, next) => {

    let input = require('fs').readFileSync('controllers/Baekjoon/10872-1.txt').toString().split('\n');
    console.log('input', input);

    // 일반 재귀
    const factorial = (input) => {
        if(input <= 1) return input;
        return input * fac(input -1);
    }

    // 꼬리 재귀
    let arr = [1];
    const factorialTail = (input) => {
        if (input <= 1) return arr.reduce((a, b) => a * b);
        arr.push((input));
        return factorialTail(input - 1);
    }

    console.log(factorialTail(input));

    return res.status(200).json({
        message: "success",
        data: input
    });
}

//********************************************************

module.exports = {
    id1,
    id10872,
}
