const path = require('path');
const fs = require('fs');

const error = false;

const casheTest = async (req, res, next) => {

    res.cacheControl = {
        maxAge: 300,
    };
    let utcString = 'Fri, 26 Nov 2021 14:33:16 GMT';
    res.setHeader('Last-Modified', utcString);
    // res.setHeader('Last-Modified', new Date().toUTCString());

    console.log( req.headers['if-modified-since']);
    console.log( utcString);
    if(req.headers['if-modified-since'] && req.headers['if-modified-since'] == utcString) {
        return res.status(304);
    }
    else {
        return res.status(200).json({
            message: "successs"
        });
    }
}

module.exports = {
    casheTest,
}
