'use strict';

var gulp = require('gulp')
  , webpack = require('gulp-webpack')
  , koa = require('gulp-koa');

var options = {
  js: {
    src: "src/js/*.js",
    destfile: "bundle.js",
    dest: "public/javascripts/"
  }
};

gulp.task('webpack', function() {
    gulp.src([options.js.src])
        .pipe(webpack({
          output: {
            filename: options.js.destfile
          }
        }))
        .pipe(gulp.dest(options.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(options.js.src, ["webpack"]);
});

gulp.task('koa', function() {
    var _fn = function() {
      gulp.src('index.js')
          .pipe(koa('index.js'));
    };

    gulp.watch(['index.js'], _fn);

    _fn();
});

gulp.task('rebuild', function() {
    return gulp.src('index.js')
        .pipe(rebuild())
        .pipe(notify({
              message: 'rebuild koa server!'
        }));
});

gulp.task('default', ['watch']);

