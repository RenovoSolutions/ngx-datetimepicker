const gulp = require('gulp');
const exec = require('child_process').execSync;
const inlineResources = require('./gulp-inline-script');
const clean = require('gulp-clean');

gulp.task('install-dep', () => {
	exec('cd ngx-datetimepicker && npm install -S ' + process.argv[4]);
	return exec('npm install -S ' + process.argv[4]);
});

gulp.task('copy-html-css-and-inline', () => {
	gulp.src(['./ngx-datetimepicker/src/app/**/*.html','!./ngx-datetimepicker/src/app/app.component.html'])
		.pipe(gulp.dest('./dist/'))
		.on('end', copyCss);
});

function copyCss() {
	gulp.src(['./ngx-datetimepicker/src/app/**/*.css','./ngx-datetimepicker/src/assets/*.css'])
		.pipe(gulp.dest('./dist/'))
		.on('end', inlineResource);
}

function inlineResource() {
	inlineResources('./dist/');
}