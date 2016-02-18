const gulp = require('gulp'),
      fs = require('fs'),
      del = require('del'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      jshint = require('gulp-jshint'),
      uservars = require('./uservars.json');

gulp.task('default', ['clean', 'copy', 'templates', 'less', 'babel']);

gulp.task('watch', function() {
  gulp.watch('src/templates/**/*.jade', ['templates']);
  gulp.watch('src/minutes/**/*.md', ['minutes']);
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/js/**/*.js', ['jshint', 'babel']);
});

function logError(error) {
  console.log(error.toString());
  if (this.emit) {
    this.emit('end');
  }
}

gulp.task('templates', ['minutes'], function() {
  return gulp.src('./src/templates/*.jade')
    .pipe(jade({
      locals: { config: uservars },
      pretty: true
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
  return gulp.src('./src/less/styles.less')
    .pipe(less())
    .on('error', logError)
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('jshint', function () {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('babel', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minutes', function () {
	return gulp.src('src/minutes/**/*.md')
    .pipe(concat('minutes.md'))
		.pipe(gulp.dest('src/templates'));
});

gulp.task('copy', function () {
  return gulp.src('lib/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del(['dist', 'src/templates/minutes.md'], cb);
});
