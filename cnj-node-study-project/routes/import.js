const indexRouter = require('./index');
const usersRouter = require('./users');
const keywordRouter = require('./keyword');
const sort = require('./sort');
const process = require('./process');
const eventLoop = require('./eventLoop');
const dataStructure = require('./dataStructure');
const classStudy = require('./classStudy');
const sortAlgorithm = require('./sortAlgorithm');
const javascriptGlobalObject = require('./javascriptGlobalObject');
const baekjoon = require('./baekjoon');
const os = require('./os');
const cashe = require('./cashe');


const importRouter = (app) => {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/keyword', keywordRouter);
    app.use('/sort', sort);
    app.use('/sort-algorithm', sortAlgorithm);
    app.use('/process', process);
    app.use('/eventLoop', eventLoop);
    app.use('/os', os);
    app.use('/data-structure', dataStructure);
    app.use('/class-study', classStudy);
    app.use('/javascript-global-objects', javascriptGlobalObject);
    app.use('/baekjoon', baekjoon);
    app.use('/cashe', cashe);
}

module.exports = {importRouter};