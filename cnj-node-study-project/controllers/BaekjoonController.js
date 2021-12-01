
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
        if (input <= 1) return input;
        return input * fac(input - 1);
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

// 피보나치
const id10870 = async (req, res, next) => {

    let input = require('fs').readFileSync('controllers/Baekjoon/10870.txt').toString();

    console.log('input=', input);

    const fibonacci = (n) => {
        if (n <= 1) return n;
        return fibonacci(n - 2) + fibonacci(n - 1);
    }

    console.log(fibonacci(input));

    return res.status(200).json({
        message: "success",
    })
}

// 별찍기 재귀 함수
const id2447 = async (req, res, next) => {

    let input = require('fs').readFileSync('controllers/Baekjoon/2447.txt').toString();

    const num = parseInt(input);
    const lines = []

    console.log('input=', input);

    const printStars = (num) => {
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                star(i, j, num)
            }
            lines.push("\n")
        }
    }

    const star = (i, j, num) => {
        if (i % 3 == 1 && j % 3 == 1) lines.push(" ");
        else {
            if (num == 1) lines.push("*");
            else star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
        }
    }

    printStars(num);
    console.log(lines.join(""))

    return res.status(200).json({
        message: "success",
    })
}

//********************************************************

module.exports = {
    id1,
    id10872,
    id10870,
    id2447,
}
