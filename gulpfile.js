var gulp = require('gulp');
var myth = require('gulp-myth');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('build', function() {
   	gulp.src('src/bemo.css')
        .pipe(myth({
        	sourcemap: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['build']);
});

gulp.task('default', ['build']);