var indexRouter = require('./index');
var usersRouter = require('./users');
var keywordRouter = require('./keyword');
var sort = require('./sort');
var process = require('./process');
var eventLoop = require('./eventLoop');
var os = require('./os');

const importRouter = (app) => {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/keyword', keywordRouter);
    app.use('/sort', sort);
    app.use('/process', process);
    app.use('/eventLoop', eventLoop);
    app.use('/os', os);
}

module.exports = {importRouter};