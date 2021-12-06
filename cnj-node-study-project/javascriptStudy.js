
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


// 인스턴스 상속 
// es5
function Book(title){
    this.title = title;
}

Book.prototype.getTitle = function() {
    return this.title;
}

function Point(title){
    Book.call(this, title);
};

Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log("Es5Object",obj.getTitle());

// es6
class Es6Book{
    constructor(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }
}
class Es6Point extends Es6Book{
    constructor(title) {
        super(title);
    }
}

const es6Obj = new Es6Point("자바스크립트");
console.log("es6Obj", es6Obj.getTitle());

// this
var book = {
    value: 123,
    get: function() {
        var value = 456;
        console.log('this === ',this);
        console.log('this.value === ',this.value);
    }
};
var fn = book.get;
fn();
book.get();


// this, call

this.value = 300;
function get(value) {
    console.log('value=', value);
    console.log('this=', this.value);
    return value + this.value;
}
console.log("get=",get(100));
console.log("get=",get.call({value: 200},100));

// 참조 변경
var book = {
    value: 123,
    point: {
        value: 456,
        get: function() {
            console.log('book get value==',this.value);
        }
    }
};

book.point.get.call(book);
book.point.get.call(book.point);


var title = "환영합니다.";
var house = {
    title: "집이예요~",
    room: {
    	title: "방입니다.",
        getTitle: function() {
            return this.title;
        }
    }
}

var fn = house.room.getTitle;
fn();
// 환영합니다.

house.room.getTitle();
// 방입니다.

house.getTitle = house.room.getTitle;
house.getTitle();
// 집이예요~

var fn = house.room.getTitle;
fn.call(house);
// 집이예요~

house.room.getTitle.call(house);
// 집이예요~

house.getTitle = house.room.getTitle;
house.getTitle.call(house);
// 집이예요~

// call, apply
// call - 값이 고정일떄, apply 는 값이 유동적일때

var obj = {0: 10, 1: 20, 2: 30};
var data = [4, 5, 6];

function get() {
    for(let i = 0; i < arguments.length; i++){
        console.log("arguments[i]=" + arguments[i]);
        console.log("this[i]=" + this[i]);
        console.log(arguments[i] + this[i]);
    }
}

get.apply(obj, data);


// this, callback

var obj = {value: 100};
var data = [5,6,7];

function callback(element, index, data) {
    return element + this.value;
}

function callbackGet(data){
    return data.map(callback, obj);
};

var result = callbackGet(data);
console.log('result ==', result);

// bind 메소드
// 두 번에 나누어 처리 1. function 오브젝트 생성, 2. 생성한 function 오브젝트를 함수로 호출
var book = {
    get: function() {
        return Array.prototype.slice.call(arguments);
    }
};

var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
console.log('result ==', result);


console.log('------------------------------ End!!');