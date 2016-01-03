'use strict';

var gulp = require('gulp')
  , webpack = require('gulp-webpack')
  , koa = require('gulp-koa');

var options = {
  js: {
    src: 'src/js/*.js',
    destfile: 'bundle.js',
    dest: 'public/javascript/'
  },
  html: {
    src: 'src/html/*.html',
    dest: 'public/html/'
  }
};

gulp.task('js', function() {
    gulp.src([options.js.src])
        .pipe(webpack({
          output: {
            filename: options.js.destfile
          }
        }))
        .pipe(gulp.dest(options.js.dest));
});

gulp.task('html', function() {
    gulp.src([options.html.src])
        .pipe(gulp.dest(options.html.dest));
});

gulp.task('watch', function() {
    gulp.watch(options.js.src, ["js"]);
    gulp.watch(options.html.src, ["html"]);
});

gulp.task('koa', function() {
    var _fn = function() {
      gulp.src('index.js')
          .pipe(koa('index.js'));
    };

    gulp.watch(['index.js'], _fn);

    _fn();
});

gulp.task('default', ['watch']);

