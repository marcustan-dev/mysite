const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['sass', 'scripts', 'images', 'jekyll-build']);

// import gulp, { task as _task } from 'gulp';
// import sass from './build/sass';
// import scripts from './build/scripts';
// import images from './build/images';
// import sync from './build/browsersync';

// [sass, scripts, images, sync].forEach(task => {
//   task(gulp);
// });

// _task('build', ['sass', 'scripts', 'images', 'jekyll-build']);


