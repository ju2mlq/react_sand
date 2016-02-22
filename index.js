'use strict';
var koa = require('koa')
  , serve = require('koa-static')
  ;

var options = {
  PORT: 3000,
  ROOT: '/public',
  HOME: '/html/index.html'
};

var app = koa();

app.use(serve(__dirname + options.ROOT));

app.use(function *(next) {
    this.redirect(options.HOME);
});

app.listen(options.PORT);
