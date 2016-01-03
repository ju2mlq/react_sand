import gulp from 'gulp';
import webpack from 'gulp-webpack';

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

gulp.task('koa', () => {
    gulp.src('public')
    .pipe(webserver({
          livereload: true,
          open: true
    }));
});

gulp.task('rebuild', () => {
    return gulp.src('index.js')
        .pipe(rebuild())
        .pipe(notify({
              message: 'rebuild koa server!'
        }));
});

gulp.task('default', ['watch']);

