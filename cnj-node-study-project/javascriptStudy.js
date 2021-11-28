
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

console.log('------------------------------ End!!');