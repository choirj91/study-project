var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

    console.log('node Version - ', process.version); // 설치된 노드 버전
    console.log('arch - ', process.arch); // 프로세서 아키텍처
    console.log('platform - ', process.platform); // 운영체제 플랫폼
    console.log('pid - ', process.pid); // 프로세스 아이디
    console.log('uptime - ', process.uptime()); // 프로세스 시작 후 흐른 시간 (초단위)
    console.log('execPath - ', process.execPath); // 노드 경로
    console.log('cwd - ', process.cwd()); // 프로세스 실행 위치
    console.log('cpuUsage - ', process.cpuUsage()); // cpu 사용량

    // console.log('process env - ' , process.env); // 환경 변수
    // NODE_OPTIONS=--max-old-space-size=8192  메모리 늘리기
    // UV_THREADPOOL_SIZE=8 백그라운드 기본 4개

    // process.exit(0); // exit(1) 에러를 알리고 종료

    return res.status(200).send('ok');
});

module.exports = router;