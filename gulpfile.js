const gulp = require('gulp'),
  jade = require('gulp-jade');

gulp.task('default', ['templates', 'watch']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.jade', ['templates'])
});

function logError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('templates', function() {
  var LOCALS = {};

  return gulp.src('./src/*.jade')
    .pipe(jade({
      locals: LOCALS,
      pretty: true
    }))
    .on('error', logError)
    .pipe(gulp.dest('./dist/'));
});
