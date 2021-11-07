var express = require('express');
var router = express.Router();
var os = require('os');

router.get('/', (req, res, next) => {

    // https://nodejs.org/api/os.html#os_os_eol

    // console.log('cpus', os.cpus());
    // console.log('EOL - ', os.EOL);
    console.log('arch - ', os.arch()); // 프로세스 아키텍쳐
    console.log('type - ', os.type()); // 운영체제 종류
    console.log('platform - ', os.platform()); // 운영체제 플랫폼
    console.log('hostname - ', os.hostname()); // 컴퓨터이름
    console.log('version - ', os.version()); // 운영체제 정보
    console.log('release - ', os.release()); // 운영체제 버전
    console.log('constants - ', os.constants); // 오류코드
    console.log('endianness - ', os.endianness());
    console.log('freemem - ', os.freemem());
    // console.log('getPriority - ', os.getPriority([pid]));
    console.log('homedir - ', os.homedir());
    console.log('loadavg - ', os.loadavg());
    console.log('networkInterfaces - ', os.networkInterfaces());
    console.log('release - ', os.release());
    // console.log('setPriority - ', os.setPriority([pid,]priority));
    console.log('tmpdir - ', os.tmpdir());
    console.log('totalmem - ', os.totalmem());
    console.log('uptime - ', os.uptime());
    // console.log('userInfo - ', os.userInfo([option]));
    console.log('userInfo - ', os.userInfo([]));


    return res.status(200).send('ok');
});

module.exports = router;