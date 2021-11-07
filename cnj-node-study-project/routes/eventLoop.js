var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

    return res.status(200).send('ok');
});

router.get('/speed', (req, res, next) => {

    // 마이크로 테스크
    Promise.resolve().then( result => console.log('promise'));

    // 테스크 큐
    setTimeout(() => {
        console.log('setTimeOut');
    }, 0);
    
    // 테스크 큐
    setImmediate(() => {
        console.log('setImmediate');
    }, 0);

    // 마이크로 테스크
    process.nextTick(() => {
        console.log('nextTick');
    }, 0);

    // nextTick => promise => setImmediate => setTimeout

    return res.status(200).send('ok');
});

module.exports = router;