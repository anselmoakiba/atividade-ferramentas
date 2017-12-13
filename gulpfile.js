var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

var htmlFile = './source/index.html';
var htmlDest = './dist/';
var cssDest = './dist/css/';

var scssFile = './source/scss/estlo.scss';

var sassDevOptions = {
	outputStyle: 'expanded'
};

var sassProdOptions = {
	outputStyle: 'compressed'
};

gulp.task('minHtml', function() {
	return gulp.src(htmlFile)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(htmlDest));
});

gulp.task('sassprod', function() {
	return gulp.src(scssFile)
		.pipe(sass(sassProdOptions).on('error', sass.logError))
		.pipe(rename('estilo.min.css'))
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
	gulp.watch(scssFile, ['sassprod', 'minHtml']);
});

gulp.task('default', ['sassprod', 'minHtml', 'watch']);


