var express = require('express');
var router = express.Router();
var caculator = require('./../src/calculator');


router.get('/', (req, res, next) => {

    return res.send('ok');
});

router.get('/hoisting', (req, res, next) => {

    console.log('name', name);
    var name = 'test';
    nameLog();

    function nameLog() {
        console.log('name', name);
    }


    return res.send('ok');
});

// exports.test = function(a) {
//     console.log(a);
// }
const test2 = function (a) {
    console.log(a);
}
module.exports = {
    test2
}

console.log(this);

router.get('/this', (req, res, next) => {

    console.log('this = ', this);

    // // 1. 기본 바인딩
    var a = 20;
    console.log('this.a', this);

    function test() {
        console.log('this', this);
    }

    const test1 = () => {
        console.log('test1 = this', this);
    }

    test(1);
    test.call(1);
    test1();
    console.log(caculator.add(1, 5));

    return res.send('ok');
});

router.get('/closure', (req, res, next) => {

    console.log('closure Start');

    function closure() {
        var name = 'x';
        var haha = function () {
            console.log('name', name);
        }
        haha();
    }

    closure();
    return res.status(200).send('ok');
});

router.get('/scope', (req, res, next) => {

    var one = 1;
    function click() {
        console.log('one = ', one);
    }
    click();
    /////

    // lexical scoping
    var dog = 'paul';
    function log() {
        console.log(dog);
    }

    function lexicalScoping() {
        var dog = 'foo';
        log();
    }
    lexicalScoping();

    return res.status(200).send('ok');
});

module.exports = router;