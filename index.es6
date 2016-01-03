import koa from 'koa';

const options = {
  PORT: 3000
};

let app = koa();

app.use(function *(next) {
    this.body = 'hello, world';
});

app.listen(options.PORT);
