var gulp = require('gulp');
var myth = require('gulp-myth');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('myth', function() {
   	gulp.src('src/bemo.css')
        .pipe(myth())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('cssmin', function() {
    gulp.src('dist/bemo.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['myth']);
});

gulp.task('default', ['myth']);