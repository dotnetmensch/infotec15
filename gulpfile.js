var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var htmlReplace = require('gulp-html-replace');
 

gulp.task('html', function(){
	return gulp.src('index.html')
		.pipe(htmlReplace({
			js: 'js/all.min.js'
		}))
		.pipe(gulp.dest('_dist/'));;
});


gulp.task('fonts', function(){
	return gulp.src('fonts/*')
		.pipe(gulp.dest('_dist/fonts'))
});

gulp.task('image', function () {
  return gulp.src('images/**/*')
    .pipe(image())
    .pipe(gulp.dest('_dist/images'));
});


gulp.task('css', function () {
	return gulp.src('css/*.css')
	    .pipe(minifyCss())
	    .pipe(gulp.dest('_dist/css'));
});

gulp.task('js', function(){
	return gulp.src(['js/jquery.js', 'js/*.js'])
	    .pipe(uglify())
	    .pipe(concat('all.min.js'))
	    .pipe(gulp.dest('_dist/js'));
});


gulp.task('build', ['css', 'js', 'fonts', 'html']);

gulp.task('default', function() {});