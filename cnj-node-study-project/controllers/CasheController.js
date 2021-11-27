const path = require('path');
const fs = require('fs');

const error = false;

// 검증 헤더1 >  Last-Modified
const lastModified = async (req, res, next) => {

    res.cacheControl = {
        maxAge: 300,
    };
    let utcString = 'Fri, 26 Nov 2021 14:33:16 GMT';
    res.setHeader('Last-Modified', utcString);
    // res.setHeader('Last-Modified', new Date().toUTCString());

    console.log( req.headers['if-modified-since']);
    console.log( utcString);
    if(req.headers['if-modified-since'] && req.headers['if-modified-since'] == utcString) {
        return res.status(304).send("Not Modified");
    }
    else {
        return res.status(200).json({
            message: "successs"
        });
    }
}

// 검증 헤더2 >  etag(Entity Tag)
const etag = async (req, res, next) => {

    res.cacheControl = {
        maxAge: 300, // 초단위
    };
    let tagString = 'asdfasdf';

    res.setHeader('ETag', tagString);

    console.log( req.headers['if-none-match']);
    console.log( tagString);

    if(req.headers['if-none-match'] && req.headers['if-none-match'] == tagString) {
        return res.status(304).send("Not Modified");
    }
    else {
        return res.status(200).json({
            message: "successs"
        });
    }
}

// 캐시 무효화
const noCache = async (req, res, next) => {

    // no-cache 데이터는 캐시 가능하나, 원 서버에 검증하여 사용
    // no-store 데이터에 민감한 정보가 있어, 저장 X (메모리에서 사용 후 최대한 빨리 삭제)
    // must-revaildate 캐시 만료후 최초 조회시 원 서버에 검증 필요, 순간 단절시 504 타임아웃으로 표기 없을 경우 예전 데이터로 활용 가능
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');

    //  HTTP 1.0 하위 호환을 위해
    res.header('Pragma', 'no-cache');

    return res.status(200).json({
        message: "successs"
    }); 
}

module.exports = {
    lastModified,
    etag,
    noCache
}
