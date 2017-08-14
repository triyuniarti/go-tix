const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const pump = require('pump');

gulp.task('mix:js',()=>{
	return gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/animejs/anime.js'
	])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('assets/js/'));
});

gulp.task('sass',(cb)=>{
	pump([
		gulp.src('assets/scss/*.scss'),
		sass(),
		autoprefixer(),
		gulp.dest('assets/css')
	],cb);
});

gulp.task('watch',()=>{
	gulp.watch('assets/scss/*.scss',['sass']);
});

gulp.task('default',['mix:js','sass']);