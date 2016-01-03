import gulp from 'gulp';
import webpack from 'gulp-webpack';
import koa from 'gulp-koa';
import babel from 'gulp-babel';

const options = {
  js: {
    src: "src/js/*.js",
    destfile: "bundle.js",
    dest: "public/javascripts/"
  }
};

gulp.task('webpack', () => {
    gulp.src([options.js.src])
        .pipe(webpack({
          output: {
            filename: options.js.destfile
          }
        }))
        .pipe(gulp.dest(options.js.dest));
});

gulp.task('watch', () => {
    gulp.watch(options.js.src, ["webpack"]);
});

gulp.task('build_server', () => {
    gulp.src('index.es6')
        .pipe(babel())
        .pipe(gulp.dest('index.js'));
});

gulp.task('koa', ['build_server'], () => {
    gulp.src('index.js')
        .pipe(koa('index.js'));
});

gulp.task('rebuild', () => {
    return gulp.src('index.js')
        .pipe(rebuild())
        .pipe(notify({
              message: 'rebuild koa server!'
        }));
});

gulp.task('default', ['watch']);

