const gulp = require('gulp'),
      fs = require('fs'),
      _ = require('lodash'),
      del = require('del'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      jshint = require('gulp-jshint'),
      marked = require('gulp-markdown'),
      gutil = require('gulp-util'),
      through = require('through2'),
      sort = require('sort-stream'),
      uservars = require('./uservars.json'),
      PluginError = gutil.PluginError;

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
    .pipe(sort(function reverse(left, right) {
      const leftName = _.last(left.path.split('/')),
            rightName = _.last(right.path.split('/'));

      if(leftName > rightName) return -1;
      if(leftName < rightName) return 1;
      return 0;
    }))
    .pipe(marked())
    .pipe(through.obj(function bufferedContents(file, enc, cb) {
      if (file.isNull()) {
        return cb(null, file);
      }

      if (file.isStream()) {
        return cb(new PluginError('gulp-less', 'Streaming not supported'));
      }

      const fileName = _.last(file.path.split('/')),
            id = fileName.split('.')[0];
      file.contents = Buffer.concat([
        new Buffer('<div id="' + id + '" class="meeting-minutes">\n'),
        file.contents,
        new Buffer('\n</div>')
      ]);
      this.push(file);
      return cb();
    }, function endStream (cb) {
      return cb();
    }))
    .pipe(concat('minutes.html'))
		.pipe(gulp.dest('src/templates'));
});

gulp.task('copy', function () {
  return gulp.src('lib/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del(['dist', 'src/templates/minutes.md'], cb);
});
