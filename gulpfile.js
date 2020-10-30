"use strict"

import gulp from 'gulp';
import rename from 'gulp-rename';
import csso from 'gulp-csso';
import sass from 'gulp-sass';


export const css = () => {
  return gulp.src("src/scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("src/css"))
}

// Watch

export const watch = () => {
  gulp.watch("src/scss/**/*.scss", gulp.series(css));
}