'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var inlineNg2Template = require('gulp-inline-ng2-template');
var sass = require('gulp-sass');

gulp.task('default', function () {
  // do nothing for now
});


gulp.task('compile', function () {
  var tsProject = ts.createProject('tsconfig.json', {  declaration: true, emitDecoratorMetadata: true });
  var tsResult = gulp.src(['src/app/stf-ng-select/**/*.ts'])
        .pipe(inlineNg2Template({ base: '/src/app/stf-ng-select/stf-ng-select' }))
        .pipe(tsProject());
  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done. 
        tsResult.dts.pipe(gulp.dest('dist/lib')),
        tsResult.js.pipe(gulp.dest('dist/lib'))
    ])
});

gulp.task('sass', function () {
  return gulp.src('./src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/app/stf-ng-select/stf-ng-select/'));
});
