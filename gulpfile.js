const gulp = require('gulp'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      babel = require('gulp-babel');

gulp.task('default', ['templates', 'less', 'babel', 'watch']);

gulp.task('watch', function () {
  gulp.watch('src/templates/**/*.jade', ['templates']);
  gulp.watch('src/templates/**/*.md', ['templates']);
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/js/**/*.js', ['babel']);
});

function logError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('templates', function() {
  // loop over all of the files and store their content as strings in the array
  // insteado of the file name. Then loop over the string in the template.
  const LOCALS = {
    config : {
      minutes: ['2015-01-21.md']
    }
  };

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

gulp.task('babel', function () {
	return gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
    .on('error', logError)
		.pipe(gulp.dest('dist/js'));
});
