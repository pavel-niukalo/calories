"use strict"

import gulp from 'gulp';
import rename from 'gulp-rename';
import csso from 'gulp-csso';
import sass from 'gulp-sass';


export const css = () => {
  return gulp.src("scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("css"))
}

// Watch

export const watch = () => {
  gulp.watch("scss/**/*.scss", gulp.series(css));
}