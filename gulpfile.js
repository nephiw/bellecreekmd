const gulp = require('gulp'),
  jade = require('gulp-jade'),
  less = require('gulp-less');

gulp.task('default', ['templates', 'less', 'watch']);

gulp.task('watch', function () {
  gulp.watch('src/templates/**/*.jade', ['templates']);
  gulp.watch('src/less/**/*.less', ['less']);
});

function logError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('templates', function() {
  var LOCALS = {};

  return gulp.src('./src/templates/*.jade')
    .pipe(jade({
      locals: LOCALS,
      pretty: true
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
  return gulp.src('./src/less/styles.less')
    .pipe(less())
    .on('error', logError)
    .pipe(gulp.dest('./dist/css'));
});
