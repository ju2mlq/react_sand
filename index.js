'use strict';
var koa = require('koa')
  , serve = require('koa-static');

var options = {
  PORT: 3000
};

var app = koa();

app.use(serve(__dirname + '/public'));

app.use(function *(next) {
    this.redirect('/html/index.html');
});

app.listen(options.PORT);
