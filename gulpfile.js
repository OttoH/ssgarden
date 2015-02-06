var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');

function handleError (err) {
  console.log(err.toString());
  this.emit('end');
}


gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .on('error', handleError)
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
  gulp.src('./src/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'src/less/main.less') ]
    }))
    .pipe(gulp.dest('./dist/style'));
});

gulp.task('default',['browserify', 'copy', 'less']);
gulp.task('default-watch',['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.*', ['default-watch']);
  gulp.watch('src/less/*.*', ['less']);
  gulp.watch('src/index.html', ['copy']);
});
