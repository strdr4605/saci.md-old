'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./src/assets/js/*.js')
    .pipe(concat('my-scripts.js'))
    .pipe(gulp.dest('./dist/assets/js/'));
});

gulp.task('scripts:watch', function () {
  gulp.watch('./src/assets/js/*.js', ['scripts', browserSync.reload]);
});

gulp.task('imagemin', function () {
  gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
        baseDir: "./dist"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/assets/sass//main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/assets/css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
});

gulp.task('html:watch', function () {
  gulp.watch('./dist/*.html', browserSync.reload);
})

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('views:watch', function () {
  gulp.watch('./src/views/*.pug', ['views']);
})

gulp.task('default', ['imagemin', 'sass', 'sass:watch', 'scripts', 'scripts:watch', 'browser-sync', 'html:watch', 'views', 'views:watch']);

// autoprefixer gulp, imagemin gulp