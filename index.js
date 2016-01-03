'use strict';
var koa = require('koa');

var options = {
  PORT: 3000
};

var app = koa();

app.use(function *(next) {
    this.body = 'hello, world';
});

app.listen(options.PORT);
