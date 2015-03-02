var gulp = require('gulp');
var myth = require('gulp-myth');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('default', function() {
   	gulp.src('src/bemo.css')
        .pipe(myth({
          // sourcemap: true,
          browsers: [
            'last 2 versions',
            'Explorer >= 9'
          ]
        }))
        .pipe(gulp.dest('dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['default']);
});
