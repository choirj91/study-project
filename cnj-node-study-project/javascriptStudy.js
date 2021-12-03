
console.log('------------------------------ Start!!');



var creationFunction = {
    arguments: {},
    caller: {},
    length: 0,
    name: "creattionFunction ",
    prototype: {
        constructor: creationFunction,
        __proto__: Object.prototype
    },
    __proto__: Function.prototype
}

this.a = 10;
function test() {

    console.log(this.a);
}

const user = new test();

user.__proto__.get = function() {console.log('a=', this.a);}
user.get();
test();

const test2 = () => {
    console.log(this.a);
}

test2();



//////////// 호이스팅

// case 1 함수 선언문 + 함수 선언문
function case1() {
    function book() {
        function getBook() {
            return "책1";
        };
        console.log(getBook());
        function getBook() {
            return "책2";
        }
    }
    book();
}
case1();

// case2 함수 표현식 + 함수 표현식
function case2() {
    function book() {
        var getBook = function() {
            return "책1";
        }
        console.log(getBook());
        var getBook = function() {
            return "책2";
        }
    }
    book();
}
case2();

// case3 함수 선언문 + 함수 표현식
function case3() {
    function book() {
        function getBook() {
            return "책2";
        }
        console.log(getBook());
        var getBook = function() {
            return "책1";
        }
    }
    book();
}
case3();

// case4 함수 표현식 + 함수 선언문
function case4() {
    function book() {
        var getBook = function() {
            return "책2";
        }
        console.log(getBook());
        function getBook() {
            return "책1";
        }
    }
    book();
}
case4();

/// arguments
function arg(a, b) {
    return arguments;
}

console.log(arg(1,2,3));


function hoisting() {
    var name = getName();

    console.log('name=', name);

    function getName () {
        return "이름";
    };

    name = function () {
        return "없엉";
    };
}
hoisting();

// context
/* 
실행 콘텍스트(Excution Context): {
    렉시컬 컨텍스트(Lexical Context): {
        환경 레코드(Environment Record): { > 구분 이유는 기록 대상에 따라 달라서
            선언적 환경 레코드(DER): { < function, 변수, catch 문에서 사용 (정적임)
                point: 123
            },
            오브젝트 환경 레코드(OER) : {} > 글로벌 함수와 변수, with 문에서 사용 (동적임)
        },
        외부 렉시컬 환경 참조(Outer Lexical Environment Record) : {},
    },
    변수 환경 컴포넌트(Variable Environment Component): {},
    this 바인딩 컴포넌트(This Binding Component): {},
}
*/

var base = 200;
function getPoint(bonus) {
    var point = 100;
    return point + base + bonus;
}
console.log(getPoint(70));

/* 실행 콘텍스트(EC): {
    렉시털 환경 컴포넌트(LEC) = {
        환경 레코드(ER): {
            bonus: 70,
            point: undefined
        },
        외부 렉시컬 환경 참조(OLER): {
            base: 200
        }
    },
    변수 환경 컴포넌트(VEC): {},
    this 바인딩 컴포넌트(TBC): {}
} */

function book() {
    function get() {
        return point;
    };
    var point = 123;
    return get();
};
console.log(book());

/* 
실행 콘텍스트(Excution Context): {
    렉시컬 컨텍스트(Lexical Context): {
        환경 레코드(Environment Record): {
            get: function() {},
            point: undefined,
        },
        외부 렉시컬 환경 참조(Outer Lexical Environment Record) : {},
    },
    변수 환경 컴포넌트(Variable Environment Component): {},
    this 바인딩 컴포넌트(This Binding Component): {},
}
*/

// this 바인딩
var obj = { point : 100};
obj.getPoint = function() {
    return this.point;
};
console.log(obj.getPoint());


/* 호출 스택 */
// window.onload = function() {
//     "use strict"
    
//     debugger;
//     function setMain() {
//         function one(){
//             two();
//             console.log(1);
//         };
//         function two(){
//             three();
//             console.log(2);
//         };
//         function three(){
//             console.log(3);
//         };
//         one();
//     }
//     setMain();
// };


console.log('------------------------------ End!!');